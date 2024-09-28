import { verifyToken, deleteContact } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const deleteDeveloperRoutes = makeFastifyRoute(
    RouteMethod.GET,
    "/developers/:contactId/delete",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { contactId } = params as { contactId: string };

        const contact = await deleteContact(contactId);

        return reply.send(contact);
    }
)