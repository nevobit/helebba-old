import { verifyToken, createWarehouse } from "@helebba/business-logic";
import { CreateWarehouseDto } from "@helebba/entities";
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const createWarehouseRoute = makeFastifyRoute (
  RouteMethod.POST,
  '/warehouses',
  verifyToken,
  async (request, reply) => {
  try{
   const { body } = request;
   const data = body as CreateWarehouseDto;
   const account = request.headers['account'] as string;
   const warehouse = await createWarehouse(account, data);
   reply.status(201).send(warehouse);
  }catch(err){
   reply.status(500).send(err);
  }
 }
);