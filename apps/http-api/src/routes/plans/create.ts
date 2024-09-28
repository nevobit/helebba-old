import { verifyToken, createPlan } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { Plan } from '@helebba/entities';


export const createPlanRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/plans",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body: Partial<Plan>};
        const store = await createPlan(body);
        return reply.status(201).send(store);
    }
)