import { verifyToken, createInvitation } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { CreateInvitationDto } from "@helebba/entities";

interface InvitationBody extends CreateInvitationDto{
    accountName: string;
    accountOwnerName: string;
}

export const createInvitationRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/invitations",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body: Partial<InvitationBody>};
        const account = request.headers['account'] as string;
        const info = { isInvited: body.isInvited, isConsultancy: body.isConsultancy, accountName: body.accountName, accountOwnerName: body.accountOwnerName, account:account, email: body.email, role: body.role }
        const invitation = await createInvitation(info);
        return reply.status(201).send(invitation);
    }
)