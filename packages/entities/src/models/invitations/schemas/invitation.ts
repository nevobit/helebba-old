import { Base } from "../../../common";

export interface Invitation extends Base {
    email: string;
    account: string;
    accountName: string;
    role: string;
    isInvited: boolean;
    isConsultancy: boolean;
}
