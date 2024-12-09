import { verifyToken, getAllBookingLocations } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getAllBookingsLocationRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/bookings/location",
    verifyToken,
    async (request, reply) => {
        const { query } = request;
        const { page, limit, search } = query as { page: number, limit: number, search: string }
        const account = request.headers['account'] as string;
        console.log(account)
        const bookingsLocation = await getAllBookingLocations({ page: Number(page), limit: Number(limit), search, account });
        console.log(bookingsLocation)
        return reply.status(200).send(bookingsLocation);
    }
)