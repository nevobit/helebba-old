import { verifyToken, getAllCategories } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getAllCategoriesRoute = makeFastifyRoute(
  RouteMethod.GET,
  "/categories",
  verifyToken,
  async (request, reply) => {
   try {
    const { query } = request;
    const { page, limit, search } = query as {
      page: number;
      limit: number;
      search: string;
    };
    const account = request.headers['account'] as string;
    const categories = await getAllCategories({ 
      page: Number(page),
      limit: Number(limit),
      search, 
      account});
     reply.status(200).send(categories);
   } catch (err) {
     if (err instanceof Error) {
       reply.status(500).send(err);
     }
   }
 },
)