import { Collection, getModel } from "@helebba/constant-definitions"
import { Contact, ContactSchemaMongo, StatusType } from "@helebba/entities"

export const deleteContact = async(id: string) => {
    const model = getModel<Contact>(Collection.CONTACTS, ContactSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete contact');
    const contact = await model.findById(id);
    return contact;
}
