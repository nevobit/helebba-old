import { helebbaApi } from '@/api';
import { Lead } from '@helebba/entities';

export const updateLead = async (lead: Partial<Lead>) => {
  const { data } = await helebbaApi.patch(`/leads/${lead.id}`, lead);
  return data;
};

export const createLead = async ({
  account,
  lead}: { account: string, lead: Partial<Lead> }
) => {
  const { data } = await helebbaApi.post(`/leads`, lead, {
    headers: {
      account,
    },
  });
  return data;
};

export const getLeads = async (account: string) => {
  const { data } = await helebbaApi.get(`/leads`, {
    headers: {
      account,
    },
  });
  return data;
};

// export const getFunnel = async (id: string) => {
//   const { data } = await helebbaApi.get(`/funnels/${id}`);
//   return data;
// };


// export const deleteRate = async (id: string) => {
//   const { data } = await helebbaApi.get(`/rates/${id}/delete`);
//   return data;
// }