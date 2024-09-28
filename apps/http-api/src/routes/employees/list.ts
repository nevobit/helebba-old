import { verifyToken, getAllEmployees } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getAllEmployeesRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/employees",
    verifyToken,
    async (request, reply) => {
        const { query } = request;
        const { page, limit, search } = query as { page: number, limit: number, search: string }
        const account = request.headers['account'] as string;
        const employees = await getAllEmployees({ page: Number(page), limit: Number(limit), search, account });
        console.log(employees)
        return reply.status(200).send(employees);
    }
)