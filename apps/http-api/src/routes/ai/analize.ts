import { analizeInfo } from "@helebba/business-logic";
import { RouteMethod } from "@helebba/constant-definitions";
import { RouteOptions } from "fastify";

export const analizeRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: "/ai/analize",
    handler: async (request, reply) => {
        const account = request.headers['account'] as string;
        const expenses = await analizeInfo(account);
        return reply.status(200).send(expenses);
    }
}