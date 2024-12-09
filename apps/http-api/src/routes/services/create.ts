import { verifyToken, createService } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { CreateServiceDto } from '@helebba/entities';
import { invalidateCache } from "../../cache";

export const createServiceRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/services",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body: CreateServiceDto };
        const account = request.headers['account'] as string;
        const cacheKey = `${request.url}?page=1&limit=10:${account}`;

        const service = await createService(account, body);
        await invalidateCache(cacheKey);

        return reply.status(201).send(service);
    }
)