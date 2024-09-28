import { verifyToken, getAllLeads } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getAllLeadsRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/leads",
    verifyToken,
    async (request, reply) => {
        const { query } = request;
        const { page, limit, search } = query as { page: number, limit: number, search: string };
        const account = request.headers['account'] as string;
        const leads = await getAllLeads({ page: Number(page), limit: Number(limit), search, account });
        return reply.status(200).send(leads);
    }
)