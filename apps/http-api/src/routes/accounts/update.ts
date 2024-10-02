import { updateAccount, verifyToken } from '@helebba/business-logic';
import { UpdateAccountDto } from '@helebba/entities';
import { makeFastifyRoute, RouteMethod } from '@helebba/constant-definitions';

export const updateAccountRoute = makeFastifyRoute(
  RouteMethod.PATCH,
  '/accounts',
  verifyToken,
  async (request, reply) => {
    const { body } = request;
    const data = body as UpdateAccountDto;
    try {
      const expense = await updateAccount(data!.id!, data);
      reply.status(200).send(expense);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
)