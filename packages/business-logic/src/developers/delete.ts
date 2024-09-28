import { Collection, getModel } from "@helebba/constant-definitions"
import { Developer, DeveloperSchemaMongo, StatusType } from "@helebba/entities"

export const deleteDeveloper = async(id: string) => {
    const model = getModel<Developer>(Collection.DEVELOPERS, DeveloperSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete contact');
    const developer = await model.findById(id);
    return developer;
}
