import { verifyToken, getAllEmails } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getAllEmailsRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/emails",
    verifyToken,
    async (request, reply) => {
        const { query } = request;
        const { page, limit, search } = query as { page: number, limit: number, search: string }
        const account = request.headers['account'] as string;
        const rates = await getAllEmails({ page: Number(page), limit: Number(limit), search, account });
        return reply.status(200).send(rates);
    }
)