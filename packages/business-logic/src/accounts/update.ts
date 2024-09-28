import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Account,
  AccountSchemaMongo,
  UpdateAccountDto,
} from '@helebba/entities';

export const updateAccount = async (id: string, data: UpdateAccountDto) => {
  const model = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);
  const account = await model.findById(id);
  
  if (!account) throw new Error(`Account don't exist`);
  
  const accountUpdated = await model.findByIdAndUpdate(id, data, {
    new: true,
  });
 
  if (!accountUpdated) throw new Error(`Account not found`);
  
  return accountUpdated;
};
