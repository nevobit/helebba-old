import { verifyToken, updateWarehouses } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { UpdateWarehouseDto } from '@helebba/entities';

export const updateWarehouseRoute = makeFastifyRoute(
  RouteMethod.PATCH,
  '/warehouses/:warehouseId',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;
    const { warehouseId } = params as { warehouseId: string };
    const data = body as UpdateWarehouseDto;
    const warehouse = await updateWarehouses(warehouseId, data);
    return reply.send(warehouse);
  },
);
