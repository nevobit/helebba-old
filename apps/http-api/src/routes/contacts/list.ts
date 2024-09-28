import { verifyToken, getAllContacts } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getAllContactsRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/contacts",
    verifyToken,
    async (request, reply) => {
        const { query } = request;
        const { page, limit, search } = query as { page: number, limit: number, search: string }
        const account = request.headers['account'] as string;
        const contact = await getAllContacts({ page: Number(page), limit: Number(limit), search, account });
        return reply.status(200).send(contact);
    }
)