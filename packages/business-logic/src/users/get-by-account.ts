import { Collection, getModel } from "@helebba/constant-definitions";
import { Account, AccountSchemaMongo, User, UserSchemaMongo } from "@helebba/entities";

export const getUsersByAccount = async (id: string): Promise<User[] | null> => {
    const accountModel = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);
    const model = getModel<User>(Collection.USERS, UserSchemaMongo);

    const account = await accountModel.findById(id);

    const users = await model.find({ _id: { $in: account!.users } });
    return users;
}