import { RouteOptions } from "fastify";
import { createContactRoute } from "./create";
import { getAllContactsRoute } from "./list";
import { getContactByIdRoute } from "./get-by-id";
import { deleteContactRoutes } from "./delete";
import { updateContactRoutes } from "./update";

export const contactsRoutes: RouteOptions[] = [
    createContactRoute,
    getAllContactsRoute,
    getContactByIdRoute,
    deleteContactRoutes,
    updateContactRoutes
]