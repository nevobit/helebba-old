import { Collection, getModel } from "@helebba/constant-definitions"
import { Account, AccountSchemaMongo } from "@helebba/entities"

export const getAccountById = async (id: string): Promise<Account> => {
 const model = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo)
 const account = await model.findById(id) as Account;
 return account;
}
