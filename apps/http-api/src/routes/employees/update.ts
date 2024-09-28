import { verifyToken, updateEmployee } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateEmployeeDto } from '@helebba/entities';

export const updateEmployeeRoutes = makeFastifyRoute(
    RouteMethod.PATCH,
    "/employees/:employeeId",
    verifyToken,
    async (request, reply) => {
        const { params, body } = request;
        const { employeeId } = params as { employeeId: string };
        const data = body as UpdateEmployeeDto
        const employee = await updateEmployee(employeeId, data);
        
        return reply.send(employee);
    }
)