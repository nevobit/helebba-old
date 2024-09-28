import { Schema } from 'mongoose';
import { StatusType } from '../../../common';
import { Email } from './email';

export const EmailSchemaMongo = new Schema<Email>({
  title: { type: String },
  content: { type: String },
  account: { type: String },
  status: { type: String, default: StatusType.ACTIVE },
},
  {
    versionKey: false,
    timestamps: true,
  });

EmailSchemaMongo.index({ _id: 1 });

EmailSchemaMongo.methods.toJSON = function () {
  const { _id, ...email } = this.toObject();
  email.uuid = _id;
  return email;
};
