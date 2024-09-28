import { verifyToken, getEmployeeById } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getEmployeeByIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/employees/:employeeId",
    verifyToken,
    async (request, reply) => {
        const { params } = request;
        const { employeeId } = params as { employeeId: string };
        const employee = await getEmployeeById(employeeId);
        if(!employee) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(employee);
    }
)
