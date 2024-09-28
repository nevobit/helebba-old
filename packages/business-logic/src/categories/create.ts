import { CreateCategoryDto, CategorySchemaMongo, Category } from "@helebba/entities";
import { Collection, getModel } from "@helebba/constant-definitions";

export const createCategory = async (
  account: string,
  data: Partial<CreateCategoryDto>
): Promise<Category | Error> => {
  const model = getModel<Category>(Collection.CATEGORIES, CategorySchemaMongo);
  const category = new model({account, ...data});
  await category.save();

  return category;
};
