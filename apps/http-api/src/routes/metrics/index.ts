import { RouteOptions } from "fastify";
import { getIncomeRoute } from "./income";
import { getExpensesRoute } from "./expenses";

export const metricsRoutes: RouteOptions[] = [
    getIncomeRoute,
    getExpensesRoute
]