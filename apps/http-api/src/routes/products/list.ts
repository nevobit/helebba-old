import { verifyToken, getAllProducts } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getAllProductsRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/products',
  verifyToken,
  async (request, reply) => {
    const { query } = request;
    const { page, limit, search } = query as {
      page: number;
      limit: number;
      search: string;
    };
    const account = request.headers['account'] as string;
    const products = await getAllProducts({
      page: Number(page),
      limit: Number(limit),
      search,
      account,
    });
    return reply.status(200).send(products);
  },
);
