import { helebbaApi } from '@/api';
import { Account } from '@helebba/entities';

export const createAccount = async (account: Partial<Account>) => {
  const { data } = await helebbaApi.post(`/accounts`, account);
  return data;
};

export const updateAccount = async (account: Partial<Account>) => {
  const { data } = await helebbaApi.patch(`/accounts`, account);
  return data;
};


export const getAccounts = async () => {
  const { data } = await helebbaApi.get('/accounts');
  return data;
};

export const getAccount = async (id: string) => {
  const { data } = await helebbaApi.get(`/account/${id}`);
  return data;
};
