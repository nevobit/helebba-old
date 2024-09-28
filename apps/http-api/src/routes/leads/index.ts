import { RouteOptions } from "fastify";
import { createLeadRoute } from "./create";
import { getAllLeadsRoute } from "./list";
import { updateLeadRoutes } from "./update";

export const leadsRoutes: RouteOptions[] = [
    createLeadRoute,
    getAllLeadsRoute,
    updateLeadRoutes
]