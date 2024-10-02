import { helebbaApi } from '@/api';
import { Store } from '@helebba/entities';

// export const updateRate = async (contact: Partial<Rate>) => {
//   const { data } = await helebbaApi.patch(`/contacts/${contact.id}`, contact);
//   return data;
// };

export const createStore = async ({
  account,
  store}: { account: string, store: Partial<Store> }
) => {
  const { data } = await helebbaApi.post(`/stores`, store, {
    headers: {
      account,
    },
  });
  return data;
};

export const getStores = async (account: string) => {
  const { data } = await helebbaApi.get(`/stores`, {
    headers: {
      account,
    },
  });
  return data;
};

export const getStore = async (id: string) => {
  const { data } = await helebbaApi.get(`/stores/${id}`);
  return data;
};


export const deleteStore = async (id: string) => {
  console.log({id})
  const { data } = await helebbaApi.get(`/stores/${id}/delete`);
  return data;
}