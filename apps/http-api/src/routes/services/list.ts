import { verifyToken, getAllServices } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { getFromCache, setCache } from "../../cache";

export const getAllServicesRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/services",
    verifyToken,
    async (request, reply) => {
        const { query } = request;
        const { page, limit, search } = query as { page: number, limit: number, search: string }
        const account = request.headers['account'] as string;
        const cacheKey = `${request.url}:${account}`;

        const responseFromCache = await getFromCache(cacheKey);

        if (responseFromCache) {
            return reply.header('x-data-source', 'CACHE').send(responseFromCache);
        } else {
            const services = await getAllServices({ page: Number(page), limit: Number(limit), search, account });
            await setCache(cacheKey, services);
            return reply.header('x-data-sources', 'HIT').status(200).send(services);
        }
    }
)