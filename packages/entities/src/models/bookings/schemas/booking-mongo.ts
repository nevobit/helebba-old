import { Schema } from "mongoose";
import { StatusType } from "../../../common";
import { Booking } from "./booking";

export const BookingSchemaMongo = new Schema<Booking>({
    account: { type: String, ref: "accounts" },
    endTime: { type: String },
    duration: { type: Number },
    service: { type: String, ref: "services" },
    location: { type: String, ref: "booking_location" },
    space: {
        _id: false,
        id: true,
        description: { type: String }
    },
    customFieldsValues: [{
        _id: false,
        id: false,
        key: { type: String },
        label: { type: String },
        type: { type: String },
        value: { type: String },
    }],
    bookingStatus: { type: String },
    hidden: { type: Boolean },
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }
}, {
    versionKey: false,
    timestamps: true
});
