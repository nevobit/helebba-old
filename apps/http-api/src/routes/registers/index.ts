import { RouteOptions } from "fastify";
import { createRegisterRoute } from "./create";
import { getAllRegistersRoute } from "./list";

export const registersRoutes: RouteOptions[] = [
    createRegisterRoute,
    getAllRegistersRoute,
]