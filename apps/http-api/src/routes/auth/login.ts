import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { login } from '@helebba/business-logic';

export const loginRoute: RouteOptions = {
  method: 'POST',
  url: '/auth/login',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const { email } = body as { email: string };
      const user = await login(email);
      reply.status(200).send(user);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
}