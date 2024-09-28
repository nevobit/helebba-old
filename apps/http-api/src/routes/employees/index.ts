import { RouteOptions } from "fastify";
import { createEmployeeRoute } from "./create";
import { getAllEmployeesRoute } from "./list";
import { getEmployeeByIdRoute } from "./get-by-id";
import { deleteEmployeeRoutes } from "./delete";
import { updateEmployeeRoutes } from "./update";

export const employeesRoutes: RouteOptions[] = [
    createEmployeeRoute,
    getAllEmployeesRoute,
    getEmployeeByIdRoute,
    deleteEmployeeRoutes,
    updateEmployeeRoutes
]