import { helebbaApi } from "@/api";

export interface FinancialSummary {
  salesGross: number;
  salesNet: number;
  costOfSales: number;
  grossProfit: number;
  operatingExpenses: number;
  financialFees: number;
  netProfit: number;
  cashReceived: number;
  accountsReceivable: number;
}

export const getIncome = async (account: string) => {
    const { data } = await helebbaApi.get(`/metrics/income`, {
      headers: {
        account,
      },
    });
    return data;
  };

export const getFinancial = async (account: string): Promise<FinancialSummary> => {
  const { data } = await helebbaApi.get(`/metrics/financial`, {
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
