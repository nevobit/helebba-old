import { RouteOptions } from "fastify";
import { createBookingLocationRoute } from "./create";
import { getBookingLocationByIdRoute } from "./get-by-id";
import { getAllBookingsLocationRoute } from "./list";
import { updateBookingLocationRoutes } from "./update";
import { getBookingLocationByHashRoute } from "./get-by-hash";

export const bookingsLocationRoutes: RouteOptions[] = [
    createBookingLocationRoute,
    getBookingLocationByIdRoute,
    getAllBookingsLocationRoute,
    updateBookingLocationRoutes,
    getBookingLocationByHashRoute
]