import { Schema } from 'mongoose';
import { Store } from './store';
import { StatusType } from '../../../common';

export const StoreSchemaMongo = new Schema<Store>({
    name: { type: String },
    warehouse: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        province: { type: String },
        country: { type: String },
    },
    location: {
        latitude: { type: String },
        longitude: { type: String },
    },
    phone: { type: String },
    currency: { type: String },
    account: { type: String, ref: "accounts" },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});

StoreSchemaMongo.methods.toJSON = function () {
    const { _id, ...store } = this.toObject();
    store.id = _id;
    return store;
};
