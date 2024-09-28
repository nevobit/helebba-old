import { verifyToken, createProduct } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";
import { UpdateProductDto } from '@helebba/entities';

export const createProductRoute = makeFastifyRoute(
    RouteMethod.POST,
    "/products",
    verifyToken,
    async (request, reply) => {
        const { body } = request as { body:  UpdateProductDto};
        const account = request.headers['account'] as string;
        const product = await createProduct(account, body);
        return reply.status(201).send(product);
    }
)
