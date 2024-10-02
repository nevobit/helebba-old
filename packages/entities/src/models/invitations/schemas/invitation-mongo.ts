import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { Invitation } from './invitation';

export const InvitationSchemaMongo = new Schema<Invitation>({
    email: { type: String },
    account: { type: String, ref: "accounts" },
    role: { type: String },
    accountName: { type: String },
    isInvited: { type: Boolean, default: false },
    isConsultancy: { type: Boolean, default: false },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});