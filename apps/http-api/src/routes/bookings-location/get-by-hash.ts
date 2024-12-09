import { getBookingLocationByHash } from "@helebba/business-logic";
import { RouteMethod } from "@helebba/constant-definitions";
import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";

export const getBookingLocationByHashRoute: RouteOptions = {
    method: RouteMethod.GET,
    url: "/bookings/location/public/:hash",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        const { params } = request;
        const { hash } = params as { hash: string };
        const bookingLocation = await getBookingLocationByHash(hash);
        if (!bookingLocation) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(bookingLocation);
    }
}