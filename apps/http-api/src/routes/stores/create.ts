import { verifyToken, createStore } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateStoreDto } from '@helebba/entities';

export const createStoreRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/stores",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateStoreDto};
        const account = request.headers['account'] as string;
        const store = await createStore(account, body);
        return reply.status(201).send(store);
    }
)