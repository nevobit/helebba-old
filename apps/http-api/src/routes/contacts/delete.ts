import { verifyToken, deleteContact } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const deleteContactRoutes = makeFastifyRoute(
    RouteMethod.GET,
    "/contacts/:contactId/delete",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { contactId } = params as { contactId: string };

        const contact = await deleteContact(contactId);

        return reply.send(contact);
    }
)