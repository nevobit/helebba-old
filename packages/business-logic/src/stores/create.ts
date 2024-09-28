import { Collection, getModel } from '@helebba/constant-definitions';
import {
    Register,
  RegisterSchemaMongo,
  Store,
  StoreSchemaMongo,
} from '@helebba/entities';

export const createStore = async (account: string, store: Partial<Store>) => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
  const modelRegister = getModel<Register>(Collection.REGISTERS, RegisterSchemaMongo);

  const createdStore = new model({ account, ...store });
  const createdRegister = new modelRegister({
    account,
    storeId: createdStore.id,
    name: 'Registradora principal',
    description: 'Esta es la registradora principal',
    cashAccounts: {
        isArchived: false,
        currency: "COP",
        name: createdStore.name + " - " +  "Registradora principal",
        type: "cash"
    }
  });

  await createdStore.save();
  await createdRegister.save();
   
  return createdStore;
};
