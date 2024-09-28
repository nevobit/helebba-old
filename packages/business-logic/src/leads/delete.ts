import { Collection, getModel } from "@helebba/constant-definitions"
import { Rate, RateSchemaMongo, StatusType } from "@helebba/entities"

export const deleteFunnel = async(id: string) => {
    const model = getModel<Rate>(Collection.RATES, RateSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete contact');
    const rate = await model.findById(id);
    return rate;
}
