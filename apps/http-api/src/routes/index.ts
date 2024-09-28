import { FastifyInstance, RouteOptions } from 'fastify';
import { healthCheckRoute } from './health-check';
import { contactsRoutes } from './contacts';
import { authRoutes } from './auth';
import { usersRoutes } from './users';
import { accountsRoutes } from './accounts';
import { warehousesRoutes } from './warehouses';
import { productsRoutes } from './products';
import { documentsRoutes } from './documents';
import { filesRoutes } from './files';
import { ratesRoutes } from './rates';
import { funnelsRoutes } from './funnels';
import { leadsRoutes } from './leads';
import { storesRoutes } from './stores';
import { registersRoutes } from './registers';
import { employeesRoutes } from './employees';
import { subscriptionsRoutes } from './subscriptions';
import { plansRoutes } from './plans';
import { developersRoutes } from './developers';
import { invitationsRoutes } from './invitations';
import { emailsRoutes } from './emails';
import { categoriesRoutes } from './categories';
import { metricsRoutes } from './metrics';
import { aiRoutes } from './ai';

const routes: RouteOptions[] = [
    healthCheckRoute,
    ...authRoutes,
    ...usersRoutes,
    ...accountsRoutes,
    ...contactsRoutes,
    ...warehousesRoutes,
    ...productsRoutes,
    ...documentsRoutes,
    ...filesRoutes,
    ...ratesRoutes,
    ...funnelsRoutes,
    ...leadsRoutes,
    ...storesRoutes,
    ...registersRoutes,
    ...employeesRoutes,
    ...subscriptionsRoutes,
    ...plansRoutes,
    ...developersRoutes,
    ...invitationsRoutes,
    ...emailsRoutes,
    ...categoriesRoutes,
    ...metricsRoutes,
    ...aiRoutes
];

export const registerRoutes = (fastify: FastifyInstance) => {
    routes.map((route) => {
        fastify.route(route);
    });
};
