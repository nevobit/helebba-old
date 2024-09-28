import { Collection, getModel } from '@helebba/constant-definitions';
import { Product, ProductSchemaMongo } from '@helebba/entities';

interface StockUpdate {
  id: string;
  newStock: number;
}

export const updateProductStock = async ({
  id,
  newStock,
}: StockUpdate): Promise<Partial<Product> | null> => {
  const model = getModel<Product>(Collection.PRODUCTS, ProductSchemaMongo);
  const product = await model.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  const updatedStock = product.stock + newStock;
  const datatToUpdate = {
    stock: updatedStock,
    updatedAt: new Date().toISOString(),
  };
  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });

  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update product');

  return product;
};
