import { verifyToken, createEmployee } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateEmployeeDto } from '@helebba/entities';

export const createEmployeeRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/employees",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateEmployeeDto};
        const account = request.headers['account'] as string;
        const employee = await createEmployee(account, body);
        return reply.status(201).send(employee);
    }
)