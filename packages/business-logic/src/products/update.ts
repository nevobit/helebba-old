import { Collection, getModel } from '@helebba/constant-definitions';
import {
  Product,
  ProductSchemaMongo,
  UpdateProductDto,
} from '@helebba/entities';

export const updateProduct = async (
  id: string,
  data: UpdateProductDto,
): Promise<Partial<Product> | null> => {
  const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);

  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };

  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update product');

  const product = await model.findById(id);

  return product;
};
