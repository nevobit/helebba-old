import { verifyToken, updateLead } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateLeadDto } from '@helebba/entities';

export const updateLeadRoutes = makeFastifyRoute(
    RouteMethod.PATCH,
    "/leads/:leadId",
    verifyToken,
    async (request, reply) => {
        const { params, body } = request;
        const { leadId } = params as { leadId: string };
        const data = body as UpdateLeadDto
        const lead = await updateLead(leadId, data);
        
        return reply.send(lead);
    }
)