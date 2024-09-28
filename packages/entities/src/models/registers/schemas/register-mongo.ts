import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { Register } from './register';

export const RegisterSchemaMongo = new Schema<Register>({
    name: { type: String },
    description: { type: String },
    storeId: { type: String, ref: "stores" },
    currentSession: { type: String },
    cashAccounts: [{
        id: { type: String },
        name: { type: String },
        type: { type: String },
        archived: { type: Boolean }
    }],
    defaultCashAccount: {
        id: { type: String },
        name: { type: String },
        type: { type: String },
        archived: { type: Boolean }
    },
    open: { type: Boolean },
    account: { type: String, ref: "accounts" },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});

RegisterSchemaMongo.methods.toJSON = function () {
    const { _id, ...register } = this.toObject();
    register.id = _id;
    return register;
};
