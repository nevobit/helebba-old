import { verifyToken, getInvitationsByUserId } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { group } from "console";

export const getInvitationsByUserIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/invitations/:email",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { email } = params as { email: string };
        const invitations = await getInvitationsByUserId({ email });
        if(!group) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(invitations);
    }
)
