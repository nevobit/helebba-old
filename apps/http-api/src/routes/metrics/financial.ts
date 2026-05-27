import { verifyToken, Financial } from "@helebba/business-logic";
import { RouteMethod, makeFastifyRoute } from "@helebba/constant-definitions";

export const getFinancialRoute = makeFastifyRoute(
  RouteMethod.GET,
  "/metrics/financial",
  verifyToken,
  async (request, reply) => {
    const account = request.headers["account"] as string;
    const financial = await Financial(account);
    return reply.status(200).send(financial);
  },
);
