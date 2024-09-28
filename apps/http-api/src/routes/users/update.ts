import { verifyToken, updateUser } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateUserDto } from '@helebba/entities';

export const updateUserRoute = makeFastifyRoute(
    RouteMethod.PATCH,
    "/users/:userId",
    verifyToken,
    async (request, reply) => {
        const { params, body } = request;
        const { userId } = params as { userId: string };
        const data = body as UpdateUserDto
        const user = await updateUser(userId, data);

        return reply.send(user);
    }
)