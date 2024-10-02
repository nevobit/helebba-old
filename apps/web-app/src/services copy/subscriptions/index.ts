import { helebbaApi } from '@/api';
import { Store } from '@helebba/entities';

// export const updateRate = async (contact: Partial<Rate>) => {
//   const { data } = await helebbaApi.patch(`/contacts/${contact.id}`, contact);
//   return data;
// };

export const createSubscription = async ({
  account,
  store}: { account: string, store: Partial<Store> }
) => {
  const { data } = await helebbaApi.post(`/subscriptions`, store, {
    headers: {
      account,
    },
  });
  return data;
};

export const getSubscription = async () => {
  const { data } = await helebbaApi.get(`/subscriptions`);
  return data;
};