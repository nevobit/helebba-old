import { RouteOptions } from 'fastify';
import { MonoContext } from '@helebba/core-modules';
import { RouteMethod } from '@helebba/constant-definitions';

export const registerRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/auth/register',
  handler: async () => {
    return {
      appVersion: MonoContext.getStateValue('version'),
      status: 'ok',
      uptime: process.uptime(),
    };
  },
};