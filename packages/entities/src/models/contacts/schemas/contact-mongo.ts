import { Schema } from "mongoose";
import { Contact, ContactType } from "./contact";
import { StatusType } from "../../../common";
import * as crypto from "crypto";

export const ContactSchemaMongo = new Schema<Contact>({
    customId: { type: String },
    account: { type: String, ref: "accounts" },
    name: { type: String },
    code: { type: String },
    tradeName: { type: String },
    email: { type: String },
    mobile: { type: String },
    isPerson: { type: Boolean },
    phone: { type: String },
    type: { type: String, enum: Object.values(ContactType) },
    iban: { type: String },
    swift: { type: String },
    clientRecord: { type: Number },
    supplierRecord: { type: Number },
    billAddress: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: Number },
        province: { type: String },
        country: { type: String },
        countryCode: { type: String },
        info: { type: String }
    },
    defaults: {
        salesChannel: { type: Number },
        expensesAccount: { type: Number },
        dueDays: { type: Number },
        paymentMethod: { type: Number },
        discount: { type: Number },
        language: { type: String },
        currency: { type: String },
        tax: { type: String },
        retention: { type: String }
    },
    socialNetworks: {
        website: { type: String }
    },
    tags: [{ type: String }],
    notes: [{
        _id: false,
        noteId: { type: String, unique: true, default: () => crypto.randomUUID() },
        name: { type: String },
        description: { type: String },
        color: { type: String },
        updatedAt: { type: Number },
        userId: { type: String }
    }],
    contactPersons: [{
        _id: false,
        personId: { type: String, unique: true, default: () => crypto.randomUUID() },
        name: { type: String },
        job: { type: String },
        phone: { type: String },
        email: { type: String },
        sendDocumentsByDefault: { type: Boolean },
        linkedin: { type: String }
    }],
    shippingAddresses: [{
        _id: false,
        shippingId: { type: String, unique: true, default: () => crypto.randomUUID() },
        name: { type: String },
        address: { type: String },
        city: { type: String },
        postalCode: { type: Number },
        province: { type: String },
        country: { type: String },
        countryCode: { type: String },
        notes: { type: String },
        privateNotes: { type: String }
    }],
    customFields: [{
        _id: false,
        field: { type: String },
        value: { type: String }
    }],
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});
