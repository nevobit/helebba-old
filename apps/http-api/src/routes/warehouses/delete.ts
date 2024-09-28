import { verifyToken, deleteWarehouse } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const deleteWarehouseRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/warehouses/:warehouseId/delete',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { warehouseId } = params as { warehouseId: string };
    const warehouse = await deleteWarehouse(warehouseId);
    return reply.send(warehouse);
  },
);
