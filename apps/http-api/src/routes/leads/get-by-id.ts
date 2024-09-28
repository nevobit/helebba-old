import { verifyToken, getFunnelById } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getFunnelByIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/funnels/:funnelId",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { funnelId } = params as { funnelId: string };
        const funnel = await getFunnelById(funnelId);
        if(!funnel) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(funnel);
    }
)
