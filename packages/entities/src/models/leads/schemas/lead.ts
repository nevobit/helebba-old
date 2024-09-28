import { Base } from "../../../common";
import { CustomField } from "../../contacts";

export interface Lead extends Base {
    userId: string;
    funnelId: string;
    contactId: string;
    account: string;
    contactName: string;
    name: string;
    person: string;
    personName: string;
    currency: string;
    value: number;
    potential: number;
    dueDate: string;
    stageId: string;
    customFields: CustomField[];
    position: number;
}
