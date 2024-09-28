import { Collection, getModel } from "@helebba/constant-definitions";
import { Product, ProductSchemaMongo } from "@helebba/entities";

export const getProductById = async(id: string): Promise<Product | null> => {
    const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);
    const product = await model.findById(id);
    return product;
}
