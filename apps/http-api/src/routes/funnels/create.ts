import { verifyToken, createRate } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateContactDto } from '@helebba/entities';

export const createRateRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/rates",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateContactDto};
        const account = request.headers['account'] as string;
        const rate = await createRate(account, body);
        return reply.status(201).send(rate);
    }
)