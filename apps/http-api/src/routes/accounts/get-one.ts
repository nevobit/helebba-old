import { verifyToken, getAccountById } from '@helebba/business-logic';
import { makeFastifyRoute, RouteMethod } from '@helebba/constant-definitions';

export const getAccountByIdRoute = makeFastifyRoute(
  RouteMethod.GET,
  "/account/:uuid",
  verifyToken,
  async (request, reply) => {
    try {
      const { params } = request;
      const { uuid } = params as { uuid: string }
      const account = await getAccountById(uuid);
      reply.status(200).send(account);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
)
