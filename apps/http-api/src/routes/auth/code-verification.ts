import { FastifyReply, FastifyRequest } from 'fastify';
import { codeVerification, verifyToken } from '@helebba/business-logic';
import { makeFastifyRoute, RouteMethod } from '@helebba/constant-definitions';

export const codeVerificationRoute = makeFastifyRoute(
  RouteMethod.POST,
  '/auth/code-verification',
  verifyToken,
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { user } = request as unknown as {
        user: { id: string; iat: number; exp: number };
      };
      if (!user) return;
      const { body } = request;
      const { code } = body as { code: number };
      const token = await codeVerification(user.id, code);
      reply.status(200).send(token);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
)