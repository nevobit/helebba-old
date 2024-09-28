import { verifyToken, getUsersByAccount } from '@helebba/business-logic';
import { RouteMethod, makeFastifyRoute } from '@helebba/constant-definitions';

export const getUsersByAccountRoute = makeFastifyRoute(
  RouteMethod.GET,
  '/users/account',
  verifyToken,
  async (request, reply) => {
    try {
      const account = request.headers['account'] as string;
      const users = await getUsersByAccount(account);
      reply.status(200).send(users);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
);
