import { Schema } from "mongoose";
import { StatusType } from "../../../common";
import { Subscription, SubscriptionType } from "./subscription";

export const SubscriptionSchemaMongo = new Schema<Subscription>(
  {
    plan: { type: String, ref: "plans" },
    subscriptionStatus: { type: String },
    nextBillingDate: { type: Date },
    user: { type: String, ref: "users" },
    status: { type: String, default: StatusType.ACTIVE },
    type: { type: String, enum: Object.values(SubscriptionType), default: SubscriptionType.FREE },
    startDate: { type: Date, defaul: Date.now() },
    endDate: { type: Date },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);