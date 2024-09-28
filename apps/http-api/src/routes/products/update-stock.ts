import { verifyToken, updateProductStock } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const updateProductStockRoute = makeFastifyRoute(
  RouteMethod.PUT,
  '/products/:productId/stock',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;
    const { productId } = params as { productId: string };
    const { stock } = body as { stock: number };
    const product = await updateProductStock({
      id: productId,
      newStock: stock,
    });
    return reply.send(product);
  },
);
