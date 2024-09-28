import { RouteOptions } from 'fastify';
import { MonoContext } from '@helebba/core-modules';
import { RouteMethod } from '@helebba/constant-definitions';

export const loginRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/auth/refresh-token',
    handler: async () => {
        return {
            appVersion: MonoContext.getStateValue('version'),
            status: 'ok',
            uptime: process.uptime(),
        };
    },
};