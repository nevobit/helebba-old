import { verifyToken, updateCategory } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';
import { UpdateCategoryDto } from '@helebba/entities';

export const updateCategoryRoute = makeFastifyRoute(
  RouteMethod.PATCH,
  '/categories/:categoryId',
  verifyToken,
  async (request, reply) => {
    const { params, body } = request;
    const { categoryId } = params as { categoryId: string };
    const data = body as UpdateCategoryDto;
    const category = await updateCategory(categoryId, data);
    return reply.send(category);
  },
);
