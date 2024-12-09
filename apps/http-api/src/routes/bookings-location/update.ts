import { verifyToken, updateBookingLocation } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateBookingLocationDto } from '@helebba/entities';

export const updateBookingLocationRoutes = makeFastifyRoute(
    RouteMethod.PATCH,
    "/bookings/location/:locationId",
    verifyToken,
    async (request, reply) => {
        const { params, body } = request;
        const { locationId } = params as { locationId: string };
        const data = body as UpdateBookingLocationDto
        const bookingLocation = await updateBookingLocation(locationId, data);
        return reply.send(bookingLocation);
    }
)