import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { NormalizedRequest } from '../../types';
import { normalizeFastifyRequest } from '../normalize-fastify-request';
export interface FastifyRequestUser extends FastifyRequest {
    user?: string;
}

export enum RouteMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
}

export const makeFastifyRoute = (
    method: RouteMethod,
    url: string,
    authFunction: (req: NormalizedRequest) => Promise<unknown>,
    handler: (
        req: FastifyRequestUser,
        reply: FastifyReply
    ) => Promise<void>,
    extraOptions?: Partial<Omit<RouteOptions, "handler">>,
): RouteOptions => {
    const enhancedHandler: RouteOptions["handler"] = async (request: FastifyRequestUser, reply: FastifyReply) => {
        const normalizedReq = normalizeFastifyRequest(request);
        const user = await authFunction(normalizedReq);
        request.user = user as string;
        return handler(request, reply);
    };

    return {
        ...extraOptions,
        method,
        url,
        handler: enhancedHandler
    }
}