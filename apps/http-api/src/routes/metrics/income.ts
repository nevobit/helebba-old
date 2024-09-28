import { verifyToken, Income } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getIncomeRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/metrics/income",
    verifyToken,
    async (request, reply) => {
        const account = request.headers['account'] as string;
        const income = await Income(account);
        return reply.status(200).send(income);
    }
)