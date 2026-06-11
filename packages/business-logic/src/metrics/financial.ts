import { Collection, getModel } from "@helebba/constant-definitions";
import { Document, DocumentSchemaMongo, StatusType } from "@helebba/entities";
import { settleDueCreditDocuments } from "../documents/settle-credit-payments";

type SalesDocumentType = "invoice" | "sale-order";

interface SalesQuery {
  status: StatusType;
  account: string;
  docType: { $in: SalesDocumentType[] };
}

interface ExpenseQuery {
  status: StatusType;
  account: string;
  docType: "expenses";
}

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

const toNumber = (value: unknown) => Number(value || 0);

export const Financial = async (account: string): Promise<FinancialSummary> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);
  await settleDueCreditDocuments(account);

  const salesQuery: SalesQuery = {
    docType: { $in: ["invoice", "sale-order"] },
    status: StatusType.ACTIVE,
    account,
  };
  const expenseQuery: ExpenseQuery = {
    docType: "expenses",
    status: StatusType.ACTIVE,
    account,
  };

  const [salesSummary] = await model.aggregate([
    { $match: salesQuery },
    {
      $project: {
        total: { $ifNull: ["$total", 0] },
        refunds: { $ifNull: ["$paymentsRefunds", 0] },
        fee: { $ifNull: ["$paymentFee", 0] },
        collected: {
          $cond: [
            {
              $or: [
                { $eq: ["$paymentCollectionStatus", "received"] },
                { $eq: ["$statusDocument", 1] },
              ],
            },
            {
              $ifNull: [
                "$paymentNetAmount",
                { $subtract: [{ $ifNull: ["$total", 0] }, { $ifNull: ["$paymentFee", 0] }] },
              ],
            },
            { $ifNull: ["$paymentsTotal", 0] },
          ],
        },
        lineCosts: {
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
    {
      $project: {
        total: 1,
        refunds: 1,
        fee: 1,
        collected: 1,
        costOfSales: { $sum: "$lineCosts" },
      },
    },
    {
      $group: {
        _id: null,
        salesGross: { $sum: "$total" },
        refunds: { $sum: "$refunds" },
        financialFees: { $sum: "$fee" },
        cashReceived: { $sum: "$collected" },
        costOfSales: { $sum: "$costOfSales" },
      },
    },
  ]);

  const [expenseSummary] = await model.aggregate([
    { $match: expenseQuery },
    { $group: { _id: null, operatingExpenses: { $sum: "$total" } } },
  ]);

  const salesGross = toNumber(salesSummary?.salesGross);
  const refunds = toNumber(salesSummary?.refunds);
  const salesNet = salesGross - refunds;
  const costOfSales = toNumber(salesSummary?.costOfSales);
  const grossProfit = salesNet - costOfSales;
  const operatingExpenses = toNumber(expenseSummary?.operatingExpenses);
  const financialFees = toNumber(salesSummary?.financialFees);
  const netProfit = grossProfit - operatingExpenses - financialFees;
  const cashReceived = toNumber(salesSummary?.cashReceived);
  const expectedCash = Math.max(salesNet - financialFees, 0);
  const accountsReceivable = Math.max(expectedCash - cashReceived, 0);

  return {
    salesGross,
    salesNet,
    costOfSales,
    grossProfit,
    operatingExpenses,
    financialFees,
    netProfit,
    cashReceived,
    accountsReceivable,
  };
};
