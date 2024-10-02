import { Schema } from "mongoose";
import { StatusType } from "../../../common";
import { User } from "./user";

export const UserSchemaMongo = new Schema<User>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    newsletter: { type: Boolean, default: false },
    photo: { type: String },
    method: { type: String },
    username: { type: String, unique: true },
    status: { type: String, default: StatusType.ACTIVE },
    lastLogin: { type: String },
    code: { type: Number },
    loginAttempts: { type: Number, default: 0 },
    twoFactorAuth: { type: Boolean },
    locked: { type: Boolean },
    plan: { type: String, default: "trial" },
    identification: { type: String },
    subscription: { type: String, ref: "subscriptions" },
    trialStartDate: { type: Date, defaul: Date.now() },
    trialEndDate: { type: Date },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);