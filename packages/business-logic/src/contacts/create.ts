import { Collection, getModel } from "@helebba/constant-definitions";
import { Contact, ContactSchemaMongo } from "@helebba/entities";

export const createContact = async (account: string, contact: Partial<Contact>) => {
    const model = getModel(Collection.CONTACTS, ContactSchemaMongo)
    const createdContact = new model({account, ...contact});
    await createdContact.save()
    return createdContact;
}
