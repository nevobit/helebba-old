import { RouteOptions } from "fastify";
import { createEmployeeRoute } from "./create";
import { getAllEmployeesRoute } from "./list";
import { getEmployeeByIdRoute } from "./get-by-id";
import { deleteEmployeeRoutes } from "./delete";
import { updateEmployeeRoutes } from "./update";
import { getEmployeeByUserIdRoute } from "./get-by-user-id";

export const employeesRoutes: RouteOptions[] = [
    createEmployeeRoute,
    getAllEmployeesRoute,
    getEmployeeByIdRoute,
    deleteEmployeeRoutes,
    getEmployeeByUserIdRoute,
    updateEmployeeRoutes,
]