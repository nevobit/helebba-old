import { RouteOptions } from 'fastify';
import { createWarehouseRoute } from './create';
import { getAllWarehousesRoute } from './list';
import { getWarehousesOverviewRoute } from './overview';
import { getProductStockRoute } from './get-product-stock';
import { updateWarehouseRoute } from './update';
import { deleteWarehouseRoute } from './delete';
import { getWarehouseByIdRoute } from './get-by-id';

export const warehousesRoutes: RouteOptions[] = [
  createWarehouseRoute,
  getAllWarehousesRoute,
  getWarehousesOverviewRoute,
  getProductStockRoute,
  updateWarehouseRoute,
  deleteWarehouseRoute,
  getWarehouseByIdRoute
];
