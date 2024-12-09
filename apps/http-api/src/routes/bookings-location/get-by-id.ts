import { verifyToken, getBookingLocationById } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getBookingLocationByIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/bookings/location/:locationId",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { locationId } = params as { locationId: string };
        const bookingLocation = await getBookingLocationById(locationId);
        if (!bookingLocation) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(bookingLocation);
    }
)
