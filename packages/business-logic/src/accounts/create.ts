import {
  AccountSchemaMongo,
  CreateAccountDto,
  Account,
  Warehouse,
  WarehouseSchemaMongo,
  Funnel,
  FunnelSchemaMongo,
} from '@helebba/entities';
import { Collection, getModel } from '@helebba/constant-definitions';

export const createAccount = async (
  data: CreateAccountDto
): Promise<Account | Error> => {
  const model = getModel<Account>(Collection.ACCOUNTS, AccountSchemaMongo);
  const modelWarehouses = getModel<Warehouse>(
    Collection.WAREHOUSES,
    WarehouseSchemaMongo,
  );

  const modelFunnel = getModel<Funnel>(
    Collection.FUNNELS,
    FunnelSchemaMongo,
  );

  const account = new model({ ...data, ownerId: data?.users[0] });

  await account.save();

  const warehouse = new modelWarehouses({
    name: 'Almacén ' + account.name,
    icon: 'bx bx-home',
    account: account.id,
    isPrincipal: true,
    phone: account.phone,
    address: {
      address: account.address,
      country: account.country,
      postalCode: account.postalCode,
      city: account.city,
    },
  });

  const funnel = new modelFunnel({
    name: "Embudo 1",
    account: account.id,
    stages: [
      {
        name: "Lead",
        dealprobability: 100
      },
      {
        name: "Contactado",
        dealprobability: 100
      },
      {
        name: "Necesidades definidas",
        dealprobability: 100
      },
      {
        name: "Propuesta realizada",
        dealprobability: 100
      },
      {
        name: "Cerrando",
        dealprobability: 100
      }
    ]
  })

  await warehouse.save();
  await funnel.save();
  return account;
};
