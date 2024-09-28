import { verifyToken, updateProduct } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { UpdateProductDto } from '@helebba/entities';

export const updateProductRoute = makeFastifyRoute(
  RouteMethod.PATCH,
  '/products/:productId',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;
    const { productId } = params as { productId: string };
    const data = body as UpdateProductDto;
    const contact = await updateProduct(productId, data);
    return reply.send(contact);
  },
);
