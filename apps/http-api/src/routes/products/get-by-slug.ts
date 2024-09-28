import { verifyToken, getProductBySlug } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getProductBySlugRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/products/slug/:slug',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { slug } = params as { slug: string };
    const account = request.headers['account'] as string;
    const product = await getProductBySlug(account, slug);
    if (!product) return reply.code(404).send();
    return reply.header('x-data-source', 'HIT').send(product);
  },
);
