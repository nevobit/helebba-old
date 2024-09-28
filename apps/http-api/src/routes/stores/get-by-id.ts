import { verifyToken, getStoreById } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getStoreByIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/stores/:storeId",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { storeId } = params as { storeId: string };
        const store = await getStoreById(storeId);
        if(!store) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(store);
    }
)
