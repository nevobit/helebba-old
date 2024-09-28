import { verifyToken, deleteProduct } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { Product } from '@helebba/entities';

export const deleteProductRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/products/:productId/delete',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { productId } = params as { productId: string };
    const product: Product | null = await deleteProduct(productId);
    return reply.send(product);
  },
);
