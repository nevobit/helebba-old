import { Collection, getModel } from "@helebba/constant-definitions"
import { StatusType, Store, StoreSchemaMongo } from "@helebba/entities"

export const deleteStore = async(id: string) => {
    const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete contact');
    const rate = await model.findById(id);
    return rate;
}
