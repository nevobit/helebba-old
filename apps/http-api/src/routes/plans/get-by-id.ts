import { getSubscriptionById, verifyToken } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getSubscriptionByIdRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/subscriptions',
  verifyToken,
  async (request, reply) => {
    const { user } = request as unknown as {
      user: { id: string; iat: number; exp: number };
    };
    if (!user) return;
    const { id } = user;
    const subscription = await getSubscriptionById(id);
    if (!subscription) return reply.code(404).send();
    return reply.header('x-data-source', 'HIT').send(subscription);
  },
);
