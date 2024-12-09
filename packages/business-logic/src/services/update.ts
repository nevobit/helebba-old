import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Contact,
  ContactSchemaMongo,
  UpdateContactDto,
} from '@helebba/entities';

export const updateService = async (
  id: string,
  data: UpdateContactDto,
): Promise<Partial<Contact> | null> => {
  const model = getModel<Contact>(Collection.CONTACTS, ContactSchemaMongo);

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update contact');

  const contact = await model.findById(id);

  return contact;
};
