import { Schema } from 'mongoose';
import { Developer } from './developer';
import { StatusType } from '../../../common';

export const DeveloperSchemaMongo = new Schema<Developer>({
    description: { type: String },
    account: { type: String, ref: "accounts" },
    hash: { type: String, },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});