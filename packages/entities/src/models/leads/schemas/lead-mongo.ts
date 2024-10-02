import { Schema } from 'mongoose';
import { Lead } from './lead';
import { StatusType } from '../../../common';

export const LeadSchemaMongo = new Schema<Lead>({
    name: { type: String, },
    userId: { type: String, ref: "users" },
    funnelId: { type: String, ref: "funnels" },
    contactId: { type: String, ref: "contacts" },
    contactName: { type: String, },
    person: { type: String, ref: "contacts" },
    personName: { type: String, },
    value: { type: Number, },
    potential: { type: Number, },
    currency: { type: String, },
    dueDate: { type: String, },
    stageId: { type: String, },
    account: { type: String, ref: "accounts" },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});
