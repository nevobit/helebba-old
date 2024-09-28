import { verifyToken, deleteCategory } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const deleteCategoryRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/categories/:categoryId/delete',
  verifyToken,
  async (request, reply) => {
    const { params } = request;
    const { categoryId } = params as { categoryId: string };
    const category = await deleteCategory(categoryId);
    return reply.send(category);
  },
);
