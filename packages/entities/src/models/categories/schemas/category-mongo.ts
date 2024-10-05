import { Schema } from 'mongoose';
import { Category } from './category';
import { StatusType } from '../../../common';
import slugify from 'slugify';

export const CategorySchemaMongo = new Schema<Category>(
  {
    name: { type: String, required: true },
    slug: { type: String },
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

CategorySchemaMongo.pre('validate', function (this, next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true })
  }
  next();
});

