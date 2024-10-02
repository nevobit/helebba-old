import { Schema } from 'mongoose';
import { Rate } from './rate';
import { StatusType } from '../../../common';

export const RateSchemaMongo = new Schema<Rate>({
    name: { type: String, },
    description: { type: String },
    account: { type: String, ref: "accounts" },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});