import { Schema } from 'mongoose';
import { Category } from './category';
import { StatusType } from '../../../common';

export const CategorySchemaMongo = new Schema<Category>(
  {
    name: { type: String, required: true },
    type: { type: String, default: "options" },
    color: { type: String },
    options: [{ type: String }],
    image: { type: String },
    showInCatalog: { type: Boolean },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE },
    account: { type: String, ref: 'accounts' },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

CategorySchemaMongo.methods.toJSON = function () {
  const { _id, ...category } = this.toObject();
  category.id = _id;
  return category;
};
