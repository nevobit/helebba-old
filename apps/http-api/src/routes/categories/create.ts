import { verifyToken, createCategory } from "@helebba/business-logic";
import { CreateCategoryDto } from "@helebba/entities";
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const createCategoryRoute = makeFastifyRoute (
  RouteMethod.POST,
  '/categories',
  verifyToken,
  async (request, reply) => {
  try{
   const { body } = request;
   const data = body as CreateCategoryDto;
   const account = request.headers['account'] as string;
   const category = await createCategory(account, data);
   reply.status(201).send(category);
  }catch(err){
   reply.status(500).send(err);
  }
 }
);