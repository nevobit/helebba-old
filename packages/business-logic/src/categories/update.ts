import { Collection, getModel } from '@helebba/constant-definitions';
import { UpdateCategoryDto, Category, CategorySchemaMongo } from '@helebba/entities';

export const updateCategory = async (id: string,data: UpdateCategoryDto,): Promise<Partial<Category> | null> => {
  const model = getModel<Category>(Collection.WAREHOUSES, CategorySchemaMongo);
  const datatToUpdate = {
    ...data,
    updatedAt: new Date().toISOString(),
  };
  const result = await model.updateOne({ _id: id }, { $set: datatToUpdate });
  if (!result.acknowledged && result.matchedCount < 1)
    throw new Error('Could not update category');
  const warehouse = await model.findById(id);
  return warehouse;
};
