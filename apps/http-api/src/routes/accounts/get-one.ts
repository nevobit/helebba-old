import { verifyToken, getAccountById } from '@helebba/business-logic';
import { RouteOptions } from 'fastify';

export const getAccountByIdRoute: RouteOptions = {
 method: 'GET',
 url: "/account/:uuid",
 preHandler: verifyToken,
 handler: async (request, reply) => {
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
};