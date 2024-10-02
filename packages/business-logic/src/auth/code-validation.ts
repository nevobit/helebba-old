import { Collection, getModel } from "@helebba/constant-definitions";
import { User, UserSchemaMongo } from "@helebba/entities";
import { sign } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

export const codeVerification = async (userId: string, code: number) => {
  const model = getModel<User>(Collection.USERS, UserSchemaMongo);

  const user = await model.findById(userId);

  if (user) {

    if (user.code === code) {
      const token = sign({ id: user.id }, JWT_SECRET!, { expiresIn: '15d' });
      return { token };
    }
  }

  throw new Error(`Invalid token`)

}