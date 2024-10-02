import { verifyToken } from '@helebba/business-logic';
import { CreateAccountDto } from '@helebba/entities';
import { createAccount } from '@helebba/business-logic';
import { makeFastifyRoute, RouteMethod } from '@helebba/constant-definitions';


export const createAccountRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/accounts',
  verifyToken,
  async (request, reply) => {
    try {
      const { user, body } = request as unknown as {
        body: CreateAccountDto,
        user: { id: string; iat: number; exp: number };
      };
      if (!user) return;
      const { id } = user;
      const account = await createAccount({ ...body, users: [id] });
      reply.status(201).send(account);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
);
