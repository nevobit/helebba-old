import { verifyToken, getProductStock } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getProductStockRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/warehouses/:warehouseId/stock',
  verifyToken,
  async (request, reply) => {
    try {
      const { params } = request;
      const { warehouseId } = params as { warehouseId: string };
      const warehouses = await getProductStock(warehouseId);
      reply.status(200).send(warehouses);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);
