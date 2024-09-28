import { RouteOptions } from "fastify";
import { createAccountRoute } from "./create";
import { getAccountsByUserRoute } from "./get-by-user";
import { getAccountByIdRoute } from "./get-one";
import { updateAccountRoute } from './update';

export const accountsRoutes: RouteOptions[] = [
 createAccountRoute,
 getAccountsByUserRoute,
 getAccountByIdRoute,
 updateAccountRoute
];
