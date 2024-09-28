import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { Warehouse } from './warehouse';

export const WarehouseSchemaMongo = new Schema<Warehouse>(
  {
    name: { type: String, required: true },
    email: { type: String },
    status: { type: String, default: StatusType.ACTIVE },
    phone: { type: String },
    mobile: { type: String },
    address: {
      address: { type: String },
      city: { type: String },
      postalCode: { type: Number },
      province: { type: String },
      country: { type: String },
      countryCode: { type: String },
    },
    postalCode: { type: String },
    color: { type: String },
    icon: { type: String },
    isPrincipal: { type: Boolean },
    account: { type: String, ref: 'accounts' },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

WarehouseSchemaMongo.methods.toJSON = function () {
  const { _id, ...warehouse } = this.toObject();
  warehouse.id = _id;
  return warehouse;
};
