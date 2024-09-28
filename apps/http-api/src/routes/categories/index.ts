import { RouteOptions } from 'fastify';
import { createCategoryRoute} from './create';
import { getAllCategoriesRoute } from './list';
import { updateCategoryRoute } from './update';
import { deleteCategoryRoute } from './delete';

export const categoriesRoutes: RouteOptions[] = [
  createCategoryRoute,
  getAllCategoriesRoute,
  updateCategoryRoute,
  deleteCategoryRoute,
];
