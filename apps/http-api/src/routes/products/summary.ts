import { verifyToken, getProductsSummary } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getProductsSummaryRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/products/summary',
  verifyToken,
  async (request, reply) => {
    const account = request.headers['account'] as string;
    const products = await getProductsSummary(account);
    return reply.status(200).send(products);
  },
);
