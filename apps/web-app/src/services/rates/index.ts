import { helebbaApi } from '@/api';
import { Rate } from '@helebba/entities';

export const updateRate = async (contact: Partial<Rate>) => {
  const { data } = await helebbaApi.patch(`/contacts/${contact.id}`, contact);
  return data;
};

export const createRate = async ({
  account,
  rate}: { account: string, rate: Partial<Rate> }
) => {
  const { data } = await helebbaApi.post(`/rates`, rate, {
    headers: {
      account,
    },
  });
  return data;
};

export const getRates = async (account: string) => {
  const { data } = await helebbaApi.get(`/rates`, {
    headers: {
      account,
    },
  });
  return data;
};

export const getRate = async (id: string) => {
  const { data } = await helebbaApi.get(`/rates/${id}`);
  return data;
};


export const deleteRate = async (id: string) => {
  const { data } = await helebbaApi.get(`/rates/${id}/delete`);
  return data;
}