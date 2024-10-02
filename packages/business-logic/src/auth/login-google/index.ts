import { Collection, getModel } from "@helebba/constant-definitions"
import { SubscriptionType, User, UserSchemaMongo } from "@helebba/entities"
import { genSaltSync, hashSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library'
import { createSubscription } from "../../subscriptions";
import { getAllPlans } from "../../plans";
import { sendWelcome } from "../../mailing";

const { JWT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_SECRET } = process.env;

const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_SECRET, "postmessage");

const verifyGoogle = async (token: string) => {
    const { tokens } = await client.getToken(token)
    console.log({ tokens })
    const ticket = await client.verifyIdToken({
        idToken: tokens.id_token!,
        audience: GOOGLE_CLIENT_ID
    });

    const payload = ticket.getPayload();
    return {
        email: payload?.email,
        name: payload?.given_name,
        lastname: payload?.family_name,
        photo: payload?.picture
    };
}

export const loginGoogle = async (id: string) => {
    console.log(id)
    const model = getModel<User>(Collection.USERS, UserSchemaMongo);

    const { email, photo, name, lastname } = await verifyGoogle(id);

    const user = await model.findOne({ email });


    if (!user) {
        const data = {
            name,
            email,
            lastname,
            photo,
            password: ':P',
            username: '',
            method: 'google'
        }
        data.username = generateUsername(name || "", email || "");

        const newUser = new model(data);
        const trialStartDate = new Date();
        newUser.trialStartDate = trialStartDate;
        const trialEndDate = new Date(
            trialStartDate.getTime() + 14 * 24 * 60 * 60 * 1000
        );
        newUser.trialEndDate = trialEndDate;

        const salt = genSaltSync(10);
        newUser.password = hashSync(data.password, salt);

        await newUser.save();

        const plans = await getAllPlans({ search: SubscriptionType.FREE });
        await createSubscription({ user: newUser.id, plan: plans?.items[0]!.id, startDate: new Date(), type: SubscriptionType.FREE, subscriptionStatus: "Active", endDate: trialEndDate });
        const token = sign({ id: newUser.id }, JWT_SECRET!, { expiresIn: '5d' });
        await sendWelcome({ email: newUser.email, accountName: newUser.name, accountOwnerName: newUser.name + ' ' + newUser.lastname })
        return { token };
    }

    if (user.locked) throw new Error("Admin is already locked");

    //  const isValidPassword = await bcrypt.compare(password!, user.password);

    //  if(!isValidPassword) {
    //      user.login_attempts += 1;
    //      await user.save();

    //      if(user.login_attempts >= 3){
    //       user.locked = true;
    //          await user.save();
    //          throw new Error('Too many login attempts, your account is already locked');
    //      }

    //      throw new Error("Invalid credentials");
    //  }

    // if(user.two_factor_auth){
    //       if(!code){
    //           throw new Error('Authentication code must be provided for login');
    //       }

    //       const verified = false;
    // }
    user.lastLogin = new Date().toString();
    user.loginAttempts = 0;
    await user.save();

    const token = sign({ id: user._id }, JWT_SECRET!, { expiresIn: '24h' });

    return { token };
}


const generateUsername = (name: string, email: string): string => {
    const username = name.charAt(0) + email.split('@')[0];
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${username}${randomNumber}`;
}