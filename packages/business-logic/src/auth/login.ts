import { Collection, getModel } from "@helebba/constant-definitions";
import { User, UserSchemaMongo } from "@helebba/entities";
import { sign } from 'jsonwebtoken';
import { Resend } from "resend";
import otpGenerator from 'otp-generator';
import { getEmailHTML } from "./email";


export const login = async (email: string) => {
    const { JWT_SECRET, RESEND_API_KEY } = process.env;
    const resend = new Resend(RESEND_API_KEY);
    const model = getModel<User>(Collection.USERS, UserSchemaMongo);

    const user = await model.findOne({ email });

    if (!user) {
        return
    }

    user.lastLogin = new Date().toString();

    const code = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
    user.code = Number(code);
    await user.save();
    await resend.emails.send({
        from: 'Helebba <onboarding@resend.dev>',
        to: [user.email],
        subject: 'Verificación de correo electrónico Helebba',
        html: getEmailHTML(code)
    });


    const token = sign({ id: user.id }, JWT_SECRET!, { expiresIn: '15d' });

    return { token };
}