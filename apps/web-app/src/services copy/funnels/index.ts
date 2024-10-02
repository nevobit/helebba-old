import { helebbaApi } from '@/api';

// export const updateRate = async (contact: Partial<Rate>) => {
//   const { data } = await helebbaApi.patch(`/contacts/${contact.id}`, contact);
//   return data;
// };

// export const createRate = async ({
//   account,
//   rate}: { account: string, rate: Partial<Rate> }
// ) => {
//   const { data } = await helebbaApi.post(`/rates`, rate, {
//     headers: {
//       account,
//     },
//   });
//   return data;
// };

export const getFunnels = async (account: string) => {
  const { data } = await helebbaApi.get(`/funnels`, {
    headers: {
      account,
    },
  });
  return data;
};

export const getFunnel = async (id: string) => {
  const { data } = await helebbaApi.get(`/funnels/${id}`);
  return data;
};


// export const deleteRate = async (id: string) => {
//   const { data } = await helebbaApi.get(`/rates/${id}/delete`);
//   return data;
// }