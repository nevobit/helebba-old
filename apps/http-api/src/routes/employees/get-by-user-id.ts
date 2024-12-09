import { verifyToken, getEmployeeByUserId } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getEmployeeByUserIdRoute = makeFastifyRoute(
    RouteMethod.GET,
    "/employees/me",
    verifyToken,
    async (request, reply) => {
        const { user } = request as unknown as {
            user: { id: string; iat: number; exp: number };
        };
        if (!user) return;
        const { id } = user;
        const employee = await getEmployeeByUserId(id);
        if (!employee) return reply.code(404).send();
        return reply.header("x-data-source", "HIT").send(employee);
    }
)
