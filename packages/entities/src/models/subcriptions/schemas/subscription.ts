import { Base } from "../../../common";

export enum SubscriptionType {
  FREE = "FREE",
  PLUS= "PLUS",
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  ADVANCED = 'ADVANCED',
  PREMIUM = "PREMIUM",
}

export interface Subscription extends Base{
    user: string;
    plan: string;
    type: SubscriptionType;
    subscriptionStatus: string;
    nextBillingDate: Date,
    endDate: Date;
    startDate: Date;
  }
  