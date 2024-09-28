import { verifyToken, createDeveloperKey } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

interface SecretInfo {
    userId: string;
    accountId: string;
    description: string;
}

export const createDeveloperRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/developers",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body: SecretInfo};
        const account = request.headers['account'] as string;
        const info = { accountId:account, userId: body.userId, description: body.description }
        const rate = await createDeveloperKey(info);
        return reply.status(201).send(rate);
    }
)