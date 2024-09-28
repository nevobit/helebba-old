import { Schema } from "mongoose";
import { StatusType } from "../../../common";
import * as crypto from "crypto";
import { Employee } from "./employee";

export const EmployeeSchemaMongo = new Schema<Employee>({
    helebbaUserId: { type: String, ref: "users" },
    account: { type: String, ref: "accounts" },
    name: { type: String },
    code: { type: String },
    email: { type: String },
    mobile: { type: String },
    phone: { type: String },
    iban: { type: String },
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

EmployeeSchemaMongo.methods.toJSON = function () {
    const { _id, ...employee } = this.toObject();
    employee.id = _id;
    return employee;
};
