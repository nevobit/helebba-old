import { Collection, getModel } from "@helebba/constant-definitions"
import { Product, ProductSchemaMongo, StatusType } from "@helebba/entities"

export const deleteProduct = async(id: string) => {
    const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);
    const result = await model.updateOne({ _id: id }, { $set: { status: StatusType.DELETED } });
    if(!result.acknowledged) throw new Error('Could not delete product');
    const product = await model.findById(id);
    return product;
}
