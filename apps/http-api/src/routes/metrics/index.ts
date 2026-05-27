import { RouteOptions } from "fastify";
import { getIncomeRoute } from "./income";
import { getExpensesRoute } from "./expenses";
import { getFinancialRoute } from "./financial";

export const metricsRoutes: RouteOptions[] = [
    getIncomeRoute,
    getExpensesRoute,
    getFinancialRoute
]
