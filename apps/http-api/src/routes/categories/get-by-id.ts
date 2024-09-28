import { verifyToken, getWarehouseById } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';


export const getWarehouseByIdRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/warehouses/:warehouseId',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { warehouseId } = params as { warehouseId: string };
    const warehouse = await getWarehouseById(warehouseId);
    if (!warehouse) return reply.code(404).send();
    return reply.header('x-data-source', 'HIT').send(warehouse);
  },
);
