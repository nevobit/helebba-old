import { RouteOptions } from 'fastify';
import { createProductRoute } from './create';
import { getAllProductsRoute } from './list';
import { getProductByIdRoute } from './get-by-id';
import { deleteProductRoute } from './delete';
import { updateProductRoute } from './update';
import { updateProductStockRoute } from './update-stock';
import { getProductsSummaryRoute } from './summary';
import { getProductBySlugRoute } from './get-by-slug';

export const productsRoutes: RouteOptions[] = [
  createProductRoute,
  getAllProductsRoute,
  getProductByIdRoute,
  deleteProductRoute,
  updateProductRoute,
  updateProductStockRoute,
  getProductsSummaryRoute,
  getProductBySlugRoute
];
