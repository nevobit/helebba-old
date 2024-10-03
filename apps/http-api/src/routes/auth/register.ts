import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@helebba/constant-definitions';
import { register } from '@helebba/business-logic';

export const registerRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/auth/register',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const { name, lastname, phone, email } = body as { email: string, name: string, lastname: string, phone: string };
      const user = await register(name, lastname, phone, email);
      reply.status(200).send(user);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
};