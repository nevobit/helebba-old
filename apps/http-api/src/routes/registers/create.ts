import { verifyToken, createRegister } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateRegistereDto } from '@helebba/entities';

export const createRegisterRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/registers",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateRegistereDto};
        const account = request.headers['account'] as string;
        const store = await createRegister(account, body);
        return reply.status(201).send(store);
    }
)