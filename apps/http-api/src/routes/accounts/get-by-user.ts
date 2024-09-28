import { verifyToken, getAllAccounts } from '@helebba/business-logic';
import { FastifyRequest, RouteOptions } from 'fastify';
import { User } from '@helebba/entities';

interface FastifyRequestAdmin extends FastifyRequest {
  user?: User;
}

export const getAccountsByUserRoute: RouteOptions = {
 method: 'GET',
 url: "/accounts",
 preHandler: verifyToken,
 handler: async (request: FastifyRequestAdmin, reply) => {
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
};