import { verifyToken, Expenses } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getExpensesRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/metrics/expenses",
    verifyToken,
    async (request, reply) => {
        const account = request.headers['account'] as string;
        const expenses = await Expenses(account);
        return reply.status(200).send(expenses);
    }
)