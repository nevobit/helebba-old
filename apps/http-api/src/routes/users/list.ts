import { getAllUsers } from '@helebba/business-logic';
import { RouteMethod } from "@helebba/constant-definitions";
import { RouteOptions } from 'fastify';

export const getAllUsersRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: "/users",
  handler: async (request, reply) => {
    try {
      const userInfo = await getAllUsers();
      reply.status(200).send(userInfo);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
};
