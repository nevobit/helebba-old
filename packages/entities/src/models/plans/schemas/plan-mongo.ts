import { Schema } from "mongoose";
import { StatusType } from "../../../common";
import { Plan, PlanType } from "./plan";

export const PlanSchemaMongo = new Schema<Plan>(
  {
    name: { type: String },
    type: { type: String, enum: Object.values(PlanType), default: PlanType.FREE, unique: true },

    status: { type: String, default: StatusType.ACTIVE },
    price: { type: Number },
    billingCycle: { type: Number },
    features: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);