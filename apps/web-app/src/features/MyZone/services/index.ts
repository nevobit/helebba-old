import { helebbaApi } from '@/api';

export const getEmployeeMe = async () => {
  const { data } = await helebbaApi.get(`/employees/me`);
  return data;
};