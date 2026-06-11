import { Collection, getModel } from "@helebba/constant-definitions";
import { Document, DocumentSchemaMongo, StatusType } from "@helebba/entities";
import { settleDueCreditDocuments } from "../documents/settle-credit-payments";

type SalesDocumentType = "invoice" | "sale-order";
type ExpenseDocumentType = "expenses";

interface SalesQuery {
  status: StatusType;
  account: string;
  docType: { $in: SalesDocumentType[] };
}

interface ExpenseQuery {
  status: StatusType;
  account: string;
  docType: ExpenseDocumentType;
}

export interface FinancialSummary {
  salesGross: number;
  salesNet: number;
  refunds: number;
  costOfSales: number;
  grossProfit: number;
  operatingExpenses: number;
  financialFees: number;
  netProfit: number;
  cashReceived: number;
  accountsReceivable: number;
}

const toNumber = (value: unknown): number => {
  const number = Number(value ?? 0);
  return Number.isFinite(number) ? number : 0;
};

export const Financial = async (account: string): Promise<FinancialSummary> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);

  /**
   * OJO:
   * Esto modifica estados antes de leer el dashboard.
   * Idealmente debería ir en un cron/job, no aquí.
   */
  await settleDueCreditDocuments(account);

  const salesQuery: SalesQuery = {
    account,
    status: StatusType.ACTIVE,
    docType: { $in: ["invoice", "sale-order"] },
  };

  const expenseQuery: ExpenseQuery = {
    account,
    status: StatusType.ACTIVE,
    docType: "expenses",
  };

  const [salesSummary] = await model.aggregate([
    {
      $match: salesQuery,
    },
    {
      $project: {
        total: { $ifNull: ["$total", 0] },
        refunds: { $ifNull: ["$paymentsRefunds", 0] },
        financialFee: { $ifNull: ["$paymentFee", 0] },

        /**
         * Dinero realmente recibido.
         * No asumimos que statusDocument === 1 significa cobrado.
         */
        collected: {
          $ifNull: ["$paymentsTotal", 0],
        },

        costOfSales: {
          $sum: {
            $map: {
              input: { $ifNull: ["$products", []] },
              as: "product",
              in: {
                $multiply: [
                  { $ifNull: ["$$product.costPrice", 0] },
                  { $ifNull: ["$$product.amount", 0] },
                ],
              },
            },
          },
        },
      },
    },
    {
      $project: {
        total: 1,
        refunds: 1,
        financialFee: 1,
        collected: 1,
        costOfSales: 1,

        netDocumentAmount: {
          $max: [
            {
              $subtract: [
                {
                  $subtract: ["$total", "$refunds"],
                },
                "$financialFee",
              ],
            },
            0,
          ],
        },
      },
    },
    {
      $project: {
        total: 1,
        refunds: 1,
        financialFee: 1,
        collected: 1,
        costOfSales: 1,
        netDocumentAmount: 1,

        receivable: {
          $max: [
            {
              $subtract: ["$netDocumentAmount", "$collected"],
            },
            0,
          ],
        },
      },
    },
    {
      $group: {
        _id: null,
        salesGross: { $sum: "$total" },
        refunds: { $sum: "$refunds" },
        financialFees: { $sum: "$financialFee" },
        cashReceived: { $sum: "$collected" },
        accountsReceivable: { $sum: "$receivable" },
        costOfSales: { $sum: "$costOfSales" },
      },
    },
  ]);

  const [expenseSummary] = await model.aggregate([
    {
      $match: expenseQuery,
    },
    {
      $group: {
        _id: null,
        operatingExpenses: {
          $sum: {
            $ifNull: ["$total", 0],
          },
        },
      },
    },
  ]);

  const salesGross = toNumber(salesSummary?.salesGross);
  const refunds = toNumber(salesSummary?.refunds);
  const salesNet = Math.max(salesGross - refunds, 0);

  const costOfSales = toNumber(salesSummary?.costOfSales);
  const grossProfit = salesNet - costOfSales;

  const operatingExpenses = toNumber(expenseSummary?.operatingExpenses);
  const financialFees = toNumber(salesSummary?.financialFees);

  const netProfit = grossProfit - operatingExpenses - financialFees;

  const cashReceived = toNumber(salesSummary?.cashReceived);
  const accountsReceivable = toNumber(salesSummary?.accountsReceivable);

  console.log({ accountsReceivable })

  return {
    salesGross,
    salesNet,
    refunds,
    costOfSales,
    grossProfit,
    operatingExpenses,
    financialFees,
    netProfit,
    cashReceived,
    accountsReceivable,
  };
};