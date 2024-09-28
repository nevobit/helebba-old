import { RouteOptions } from "fastify";
import { createPlanRoute } from "./create";

export const plansRoutes: RouteOptions[] = [
    createPlanRoute,
]