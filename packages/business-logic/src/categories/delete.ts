import { Collection, getModel } from "@helebba/constant-definitions"
import { Category, CategorySchemaMongo, StatusType } from "@helebba/entities"

export const deleteCategory = async(id: string) => {
    const model = getModel<Category>(Collection.CATEGORIES, CategorySchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete category');
    const category = await model.findById(id);
    return category;
}
