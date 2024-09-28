import { Base } from "../../../common";


interface CashAccount {
    id: string;
    name: string;
    type: string;
    isArchived: boolean;
}

export interface Register extends Base {
    name: string;
    description: string;
    storeId: string;
    currentSession: string;
    open: boolean;
    account: string;
    cashAccounts: CashAccount[],
    defaultCashAccount: CashAccount
}
