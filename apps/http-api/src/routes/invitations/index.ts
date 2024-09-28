import { RouteOptions } from "fastify";
import { createInvitationRoute } from "./create";
import { getInvitationsByUserIdRoute } from "./get-by-user";
import { acceptInvitationRoutes } from "./accept";

export const invitationsRoutes: RouteOptions[] = [
    createInvitationRoute,
    getInvitationsByUserIdRoute,
    acceptInvitationRoutes
]