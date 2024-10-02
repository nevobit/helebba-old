import { Collection, getModel } from "@helebba/constant-definitions"
import { Account, AccountSchemaMongo } from "@helebba/entities"

export const getAllAccounts = async (id: string): Promise<Account[]> => {
 const model = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);
 
  const accounts = await model.find({ users: id });
  console.log(accounts)
 return accounts;
}