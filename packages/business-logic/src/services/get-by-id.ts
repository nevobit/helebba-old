import { Collection, getModel } from "@helebba/constant-definitions";
import { Contact, ContactSchemaMongo } from "@helebba/entities";

export const getServiceById = async (id: string): Promise<Contact | null> => {
    const model = getModel<Contact>(Collection.CONTACTS, ContactSchemaMongo);
    const contact = await model.findById(id);
    return contact;
}