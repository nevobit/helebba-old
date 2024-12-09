import { Schema } from "mongoose";

export const CustomFieldSchema = new Schema({
    key: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, required: true },
    required: { type: Boolean, required: true },
    scopes: { type: [String], default: null },
    options: { type: [String], default: null },
}, { _id: false, id: true });

export const OnboardingSchema = new Schema({
    started: { type: Boolean },
    completedSettings: { type: Boolean },
    completedBackground: { type: Boolean },
    completedLogo: { type: Boolean },
    finished: { type: Boolean },
}, { _id: false, id: false });

export const ServiceHashedSchema = new Schema({
    serviceId: { type: String },
    hash: { type: String },
}, { _id: false, id: true });

export const SpaceSchema = new Schema({
    description: { type: String },
    type: { type: String },
    active: { type: Boolean },
    includeAllServices: { type: Boolean },
    services: {
        eventId: { type: String },
        id: { type: String },
    },
}, { _id: false, id: true });

export const TimeSlotSchema = new Schema({
    weekday: { type: Number },
    startTime: { type: String },
    endTime: { type: String },
    enabled: { type: Boolean },
    timeSlots: [{
        startTime: { type: String },
        endTime: { type: String },
    }]
}, { _id: false, id: true });

export const BookingLocationSchemaMongo = new Schema({
    name: { type: String },
    description: { type: String, default: "" },
    type: { type: String, default: "" },
    typeName: { type: String, default: "" },
    active: { type: Boolean, },
    address: { type: String, default: null },
    bufferTime: { type: Number, default: 0 },
    customFields: [{ type: CustomFieldSchema, default: [] }],
    defaultHeader: { type: String },
    defaultSpace: { type: String },
    extraClosingDates: [{ type: String, default: [] }],
    extraOpeningDates: [{ type: String, default: [] }],
    hasHeader: { type: Boolean },
    hasPicture: { type: Boolean },
    hash: { type: String },
    maxDaysAhead: { type: Number },
    minimumNoticeTime: { type: Number },
    nationalDaysCountry: { type: String, default: null },
    onboarding: { type: OnboardingSchema },
    phone: { type: String, default: null },
    publicServiceHashes: [{ type: ServiceHashedSchema, default: [] }],
    showBranding: { type: Boolean },
    spaces: [{ type: SpaceSchema, default: [] }],
    account: { type: String },
    startTimeIncrement: { type: Number },
    timeSlots: [{ type: TimeSlotSchema, default: [] }],
    timezone: { type: String },
    url: { type: String, default: null },
    status: { type: String },
    picture: { type: String }
}, {
    versionKey: false,
    timestamps: true,
});
