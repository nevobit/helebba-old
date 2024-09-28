
import { sendEmailSES, verifyToken } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const sendEmailSESRoute = makeFastifyRoute(
    RouteMethod.POST,
    '/emails/send',
    verifyToken,
    async (request, reply) => {
        const { body } = request;
        const data = body as { sender: string, emails: string[], subject: string, content: string };
        const email = await sendEmailSES(data);
        return reply.status(201).send(email);
    }
)
