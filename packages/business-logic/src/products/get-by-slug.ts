import { Collection, getModel } from "@helebba/constant-definitions";
import { Product, ProductSchemaMongo } from "@helebba/entities";

export const getProductBySlug = async(account: string, slug: string): Promise<Product | null> => {
    const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);
    const product = await model.findOne({slug, account });
    return product;
}
