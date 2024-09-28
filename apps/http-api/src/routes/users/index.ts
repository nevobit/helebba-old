import { RouteOptions } from "fastify";
import { getUserByIdRoute } from "./get-by-id";
import { getAllUsersRoute } from "./list";
import { getUsersByAccountRoute } from "./get-by-account";
import { updateUserRoute } from "./update";

export const usersRoutes: RouteOptions[] = [getUserByIdRoute, getAllUsersRoute, getUsersByAccountRoute, updateUserRoute];
