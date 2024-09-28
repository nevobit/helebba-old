
import { saveEmail, verifyToken } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { CreateEmailDto } from "@helebba/entities";

export const createEmailRoute = makeFastifyRoute(
    RouteMethod.POST,
    '/emails',
    verifyToken,
    async (request, reply) => {
        const { body } = request;
        const data = body as CreateEmailDto;
        const email = await saveEmail(data);
        return reply.status(201).send(email)
    }
)
