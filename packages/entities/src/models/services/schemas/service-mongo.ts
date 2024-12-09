import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { Service } from './service';

export const ServiceSchemaMongo = new Schema<Service>({
    name: { type: String },
    code: { type: String },
    description: { type: String },
    price: { type: Number },
    cost: { type: Number },
    timeInMinutes: { type: Number },
    tax: { type: Number },
    total: { type: Number },
    account: { type: String, ref: "accounts" },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});