import { Schema } from "mongoose";
import { Account } from "./account";

export const AccountSchemaMongo = new Schema<Account>(
  {
    name: { type: String, required: true },
    type: { type: String },
    country: { type: String },
    ownerId: { type: String },
    structure: { type: String },
    employees: { type: String },
    website: { type: String },
    isPrincipal: { type: Boolean, default: false },
    identification: { type: String },
    address: { type: String },
    city: { type: String },
    phone: { type: String },
    logo: { type: String },
    lastLogin: { type: String },
    users: [{ type: String, ref: "users" }],
    postalCode: { type: String },
    invoiceTemplate: { type: String },
    conditions: { type: String, default: '' },
  },
  {
    versionKey: false,
    timestamps: true
  }
);