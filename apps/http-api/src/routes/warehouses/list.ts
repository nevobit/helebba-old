import { verifyToken, getAllWarehouses } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getAllWarehousesRoute = makeFastifyRoute(
  RouteMethod.GET,
  "/warehouses",
  verifyToken,
  async (request, reply) => {
   try {
    const account = request.headers['account'] as string;
    const warehouses = await getAllWarehouses(account);
     reply.status(200).send(warehouses);
   } catch (err) {
     if (err instanceof Error) {
       reply.status(500).send(err);
     }
   }
 },
)