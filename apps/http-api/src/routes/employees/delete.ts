import { verifyToken, deleteEmployee } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const deleteEmployeeRoutes = makeFastifyRoute(
    RouteMethod.GET,
    "/employees/:employeeId/delete",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { employeeId } = params as { employeeId: string };

        const employee = await deleteEmployee(employeeId);

        return reply.send(employee);
    }
)