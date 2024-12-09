import { RouteOptions } from "fastify";
import { getAllServicesRoute } from "./list";
import { createServiceRoute } from "./create";

export const servicesRoutes: RouteOptions[] = [
    createServiceRoute,
    getAllServicesRoute
]