import { Base } from "../../../common";

export enum PlanType {
  FREE = "FREE",
  PLUS= "PLUS",
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  ADVANCED = 'ADVANCED',
  PREMIUM = "PREMIUM",
}

export interface Plan extends Base{
    name: string;
    price: number;
    type: PlanType;
    billingCycle: number;
    features: string[];
  }
  