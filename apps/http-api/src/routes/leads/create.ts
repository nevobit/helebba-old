import { verifyToken, createLead } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateLeadDto } from '@helebba/entities';

export const createLeadRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/leads",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateLeadDto};
        const account = request.headers['account'] as string;
        const rate = await createLead(account, body);
        return reply.status(201).send(rate);
    }
)