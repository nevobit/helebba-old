import { verifyToken, deleteStore } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const deleteStoreRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/stores/:storeId/delete",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { storeId } = params as { storeId: string };

        const store = await deleteStore(storeId);
        return reply.send(store);
    }
)