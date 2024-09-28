import { verifyToken, getContactById } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { group } from "console";

export const getContactByIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/contacts/:contactId",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { contactId } = params as { contactId: string };
        const contact = await getContactById(contactId);
        if(!group) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(contact);
    }
)
