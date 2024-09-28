import { RouteOptions } from "fastify";
import { createRateRoute } from "./create";
import { getAllRatesRoute } from "./list";

export const ratesRoutes: RouteOptions[] = [
    createRateRoute,
    getAllRatesRoute
]