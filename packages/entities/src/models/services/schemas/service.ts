import { Base } from "../../../common";

export interface Service extends Base {
    name: string;
    code: string;
    description: string;
    price: number;
    cost: number;
    account: string;
    timeInMinutes: number;
    tax: number;
    total: number;
}