import { verifyToken, createBookingLocation } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { CreateBookingLocationDto } from '@helebba/entities';

export const createBookingLocationRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/bookings/location",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body: CreateBookingLocationDto };
        const account = request.headers['account'] as string;
        const contact = await createBookingLocation({ ...body, account });
        return reply.status(201).send(contact);
    }
)