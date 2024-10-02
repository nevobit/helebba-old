import { verifyToken, getAllAccounts } from '@helebba/business-logic';
import { FastifyRequestUser, makeFastifyRoute, RouteMethod } from '@helebba/constant-definitions';

export const getAccountsByUserRoute = makeFastifyRoute(
  RouteMethod.GET,
  "/accounts",
  verifyToken,
  async (request: FastifyRequestUser, reply) => {
   try {
    const { user } = request as unknown as {
      user: { id: string; iat: number; exp: number };
    };
     if (!user) return;
     const { id } = user;
     const userInfo = await getAllAccounts(id);
     reply.status(200).send(userInfo);
   } catch (err) {
     if (err instanceof Error) {
       reply.status(500).send(err);
     }
   }
 },
);