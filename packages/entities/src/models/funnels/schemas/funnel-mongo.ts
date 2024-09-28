import { Schema } from 'mongoose';
import { Funnel } from './funnel';
import { StatusType } from '../../../common';
import * as crypto from "crypto";

export const FunnelSchemaMongo = new Schema<Funnel>({
    name: { type: String, },
    account: { type: String, ref: "accounts" },
    stages: [{
        _id: false,
        stageId: { type: String, unique: true, default: () => crypto.randomUUID() },
        name: { type: String },
        key: { type: String },
        desc: { type: String },
        dealProbability: { type: Number },
    }],
    status: { type: String, enum: Object.values(StatusType), default: StatusType.ACTIVE }

}, {
    versionKey: false,
    timestamps: true
});

FunnelSchemaMongo.methods.toJSON = function () {
    const { _id, ...funnel } = this.toObject();
    funnel.id = _id;
    return funnel;
};
