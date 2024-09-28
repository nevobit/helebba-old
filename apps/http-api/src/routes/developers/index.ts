import { RouteOptions } from "fastify";
import { createDeveloperRoute } from "./create";
import { getAllDevelopersRoute } from "./list";

export const developersRoutes: RouteOptions[] = [
    createDeveloperRoute,
    getAllDevelopersRoute
]