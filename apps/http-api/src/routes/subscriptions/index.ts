import { RouteOptions } from "fastify";
import { getSubscriptionByIdRoute } from "./get-by-id";

export const subscriptionsRoutes: RouteOptions[] = [
    getSubscriptionByIdRoute,
]