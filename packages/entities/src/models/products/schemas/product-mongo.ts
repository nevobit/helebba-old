import { Schema } from 'mongoose';
import { Product } from './product';
import { StatusType } from '../../../common';
import * as crypto from "crypto";
import slugify from 'slugify';


export const ProductSchemaMongo = new Schema<Product>({
    kind: { type: String, },
    name: { type: String, },
    slug: { type: String, },
    desc: { type: String, },
    typeId: { type: String, },
    contactId: { type: String, ref: "contacts" },
    contactName: { type: String },
    price: { type: Number, default: 0 },
    tax: { type: Number, },
    total: { type: Number, },
    hasStock: { type: Number, },
    stock: { type: Number },
    barcode: { type: String },
    sku: { type: String, },
    notes: [{
        _id: false,
        id: { type: String, unique: true, default: () => crypto.randomUUID() },
        title: { type: String },
        color: { type: String },
        content: { type: String }
    }],
    cost: { type: Number },
    purchasePrice: { type: Number, },
    weight: { type: Number },
    inCatalog: { type: Boolean, default: false },
    tags: [{ type: String }],
    images: [{ type: String }],
    categoryId: { type: String, ref: "categories" },
    categories: [{
        _id: false,
        name: { type: String },
        showInCatalog: { type: Boolean },
        type: { type: String, default: "options" },
        color: { type: String },
        options: [{ type: String }],
    }],
    categoryOption: { type: String },
    factoryCode: { type: String },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE },
    account: { type: String, ref: "accounts" },
    forSale: { type: Number },
    forPurchase: { type: Number },
    salesChannelId: { type: String },
    expAccountId: { type: String },
    warehouseId: { type: String, ref: "warehouses" },
    variants: [{
        _id: false,
        variantId: { type: String, unique: true, default: () => crypto.randomUUID() },
        barcode: { type: String, },
        sku: { type: String, },
        price: { type: Number, },
        name: { type: String },
        color: { type: String },
        size: { type: String },
        cost: { type: Number, },
        purchasePrice: { type: Number },
        stock: { type: Number }
    }],
    customFields: [{
        _id: false,
        field: { type: String },
        value: { type: String }
    }],
}, {
    versionKey: false,
    timestamps: true
});

ProductSchemaMongo.pre('validate', function (this, next) {
    if (this.name) {
        this.slug = slugify(this.name, { lower: true, strict: true })
    }
    next();
});


ProductSchemaMongo.methods.toJSON = function () {
    const { _id, ...product } = this.toObject();
    product.id = _id;
    return product;
};
