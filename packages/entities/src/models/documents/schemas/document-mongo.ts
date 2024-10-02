import { Schema } from 'mongoose';
import { Document } from './document';
import { StatusType } from '../../../common';
import * as crypto from "crypto";

export const DocumentSchemaMongo = new Schema<Document>(
  {
    contact: { type: String },
    account: { type: String },
    docType: { type: String },
    contactName: { type: String },
    desc: { type: String },
    date: { type: String },
    dueDate: { type: String },
    notes: { type: String },
    tax: { type: Number },
    subtotal: { type: Number },
    discount: { type: Number },
    total: { type: Number },
    language: { type: String },
    statusDocument: { type: Number },
    docNumber: { type: String },
    currency: { type: String },
    salesChannelId: { type: String },
    warehouseId: { type: String },
    paymentMethod: { type: String },
    designId: { type: String },
    currencyChange: { type: Number },
    paymentsTotal: { type: Number },
    paymentsPending: { type: Number },
    paymentsRefunds: { type: Number },
    status: {
      type: String,
      enum: Object.values(StatusType),
      default: StatusType.ACTIVE,
    },
    customFields: [
      {
        field: { type: String },
        value: { type: String },
        _id: false,
        id: { type: String, unique: true, default: () => crypto.randomUUID() },
      },
    ],
    products: [
      {
        concept: { type: String },
        description: { type: String },
        price: { type: Number },
        amount: { type: Number },
        tax: { type: Number },
        discount: { type: Number },
        total: { type: Number },
        weight: { type: Number },
        costPrice: { type: Number },
        sku: { type: String },
        id: {
          type: String,
        },
        _id: false,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
