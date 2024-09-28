import { verifyToken, createContact } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateContactDto } from '@helebba/entities';

export const createContactRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/contacts",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateContactDto};
        const account = request.headers['account'] as string;
        const contact = await createContact(account, body);
        return reply.status(201).send(contact);
    }
)