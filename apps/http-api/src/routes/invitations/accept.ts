import { verifyToken, acceptInvitation } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const acceptInvitationRoutes = makeFastifyRoute(
    RouteMethod.PATCH,
    "/invitations/:id/accept/:userId",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { id, userId } = params as { id: string, userId: string };
        const account = request.headers['account'] as string;
        console.log({account})
        const invitation = await acceptInvitation(id, account, userId);

        return reply.send(invitation);
    }
)