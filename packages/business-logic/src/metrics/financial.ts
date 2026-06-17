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

const CREDIT_PAYMENT_METHODS = ["addi", "sistecredito"];

const getTodayDateInput = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const getEffectivePaymentCollectionStatus = (document: Document): string => {
  if (
    CREDIT_PAYMENT_METHODS.includes(document.paymentMethod || "") &&
    document.paymentDisbursementDate &&
    document.paymentDisbursementDate < getTodayDateInput()
  ) {
    return "pending";
  }

  return (document as any).paymentCollectionStatus || "pending";
};

const sum = <T>(items: T[], getValue: (item: T) => number): number => {
  return items.reduce((total, item) => total + getValue(item), 0);
};

const getCostOfSales = (document: Document): number => {
  const products = Array.isArray(document.products) ? document.products : [];

  return products.reduce((total, product: any) => {
    const costPrice = toNumber(product.costPrice);
    const amount = toNumber(product.amount);

    return total + costPrice * amount;
  }, 0);
};

export const Financial = async (account: string): Promise<FinancialSummary> => {
  const model = getModel<Document>(Collection.DOCUMENTS, DocumentSchemaMongo);

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

  const [salesDocuments, expenseDocuments] = await Promise.all([
    model.find(salesQuery).lean<Document[]>(),
    model.find(expenseQuery).lean<Document[]>(),
  ]);

  const salesGross = sum(salesDocuments, (document) => {
    return toNumber(document.total);
  });

  const refunds = sum(salesDocuments, (document) => {
    return toNumber((document as any).paymentsRefunds);
  });

  const salesNet = Math.max(salesGross - refunds, 0);

  const costOfSales = sum(salesDocuments, (document) => {
    return getCostOfSales(document);
  });

  const grossProfit = salesNet - costOfSales;

  const operatingExpenses = sum(expenseDocuments, (document) => {
    return toNumber(document.total);
  });

  const financialFees = sum(salesDocuments, (document) => {
    return toNumber((document as any).paymentFee);
  });

  const cashReceived = sum(
    salesDocuments.filter((document) => {
      return getEffectivePaymentCollectionStatus(document) === "received";
    }),
    (document) => {
      return toNumber(document.total);
    }
  );

  const accountsReceivable = sum(
    salesDocuments.filter((document) => {
      return ["pending", "scheduled"].includes(getEffectivePaymentCollectionStatus(document));
    }),
    (document) => {
      return toNumber(document.paymentNetAmount);
    }
  );
  const netProfit = cashReceived - operatingExpenses;

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
