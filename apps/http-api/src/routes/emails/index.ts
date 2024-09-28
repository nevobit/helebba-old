import { RouteOptions } from "fastify";
import { createEmailRoute } from "./create";
import { sendEmailSESRoute } from "./sender";
import { getAllEmailsRoute } from "./list";

export const emailsRoutes: RouteOptions[] = [
  createEmailRoute,
  sendEmailSESRoute,
  getAllEmailsRoute
];
