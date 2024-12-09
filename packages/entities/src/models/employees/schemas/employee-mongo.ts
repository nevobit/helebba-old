import { Schema } from "mongoose";
import { StatusType } from "../../../common";
import { Employee } from "./employee";

export const EmployeeSchemaMongo = new Schema<Employee>({
    helebbaUserId: { type: String, ref: "users" },
    account: { type: String, ref: "accounts" },
    name: { type: String },
    lastname: { type: String },
    dateOfBirth: { type: String },
    nationality: { type: String },
    socialSecurityNum: { type: String },
    academicLevel: { type: String },
    languages: [{ type: String }],
    mainLanguage: [{ type: String }],
    code: { type: String },
    gender: { type: String },
    mainEmail: { type: String },
    email: { type: String },
    identification: { type: String },
    phone: { type: String },
    mobile: { type: String },
    address: {
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
        province: { type: String },
        country: { type: String },
    },
    teamIds: [{ type: String }],
    workplace: { type: String },
    iban: { type: String },
    files: [{ type: String }],
    tags: [{ type: String }],
    notes: [{
        type: String
    }],
    currentContract: {
        id: { type: String },
        type: { type: String },
        startDate: { type: Number },
        endDate: { type: Number },
        jobTitle: { type: String },
        scheduleHours: { type: Number },
        scheduleMode: { type: String },
        workingDays: [{ type: String }],
        salary: { type: Number },
        salaryInterval: { type: String },
        salaryPayments: { type: Number },
        salaryExtra: [{ type: String }]
    },
    reportingTo: { type: String },
    title: { type: String },
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