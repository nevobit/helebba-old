import { verifyToken, getProductById } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { group } from 'console';

export const getProductByIdRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/products/:productId',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { productId } = params as { productId: string };
    const product = await getProductById(productId);
    if (!group) return reply.code(404).send();
    return reply.header('x-data-source', 'HIT').send(product);
  },
);
