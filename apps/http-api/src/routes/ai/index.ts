import { RouteOptions } from "fastify";
import { analizeRoute } from "./analize";

export const aiRoutes: RouteOptions[] = [
    analizeRoute
]