import { helebbaApi } from "@/api";

export const getIncome = async (account: string) => {
    const { data } = await helebbaApi.get(`/metrics/income`, {
      headers: {
        account,
      },
    });
    return data;
  };

  export const getExpenses = async (account: string) => {
    const { data } = await helebbaApi.get(`/metrics/expenses`, {
      headers: {
        account,
      },
    });
    return data;
  };