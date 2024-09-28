import { Collection, getModel } from "@helebba/constant-definitions";
import { Product, ProductSchemaMongo } from "@helebba/entities";

export const createProduct = async (account: string, product: Partial<Product>) => {
    const model = getModel(Collection.PRODUCTS, ProductSchemaMongo)
    const createdProduct = new model({account, ...product});
    await createdProduct.save()
    return createdProduct;
}
