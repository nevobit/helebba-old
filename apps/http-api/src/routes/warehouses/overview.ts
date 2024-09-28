import { verifyToken, getWarehousesOverview } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getWarehousesOverviewRoute = makeFastifyRoute(
  RouteMethod.GET,
  "/warehouses/all/overview",
  verifyToken,
  async (request, reply) => {
   try {
    const account = request.headers['account'] as string;
    const warehouses = await getWarehousesOverview(account);
     reply.status(200).send(warehouses);
   } catch (err) {
     if (err instanceof Error) {
       reply.status(500).send(err);
     }
   }
 },
)