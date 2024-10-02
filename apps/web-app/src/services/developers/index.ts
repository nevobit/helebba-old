import { helebbaApi } from '@/api';

interface SecretInfo {
  userId: string;
  accountId: string;
  description: string;
}

export const createDeveloper = async ({
  developer}: { developer: Partial<SecretInfo> }
) => {
  const { data } = await helebbaApi.post(`/developers`, developer, {
    headers: {
      account: developer.accountId,
    },
  });
  return data;
};

export const getDevelopers = async (account: string) => {
  const { data } = await helebbaApi.get(`/developers`, {
    headers: {
      account,
    },
  });
  return data;
};
