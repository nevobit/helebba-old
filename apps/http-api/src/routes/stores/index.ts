import { RouteOptions } from "fastify";
import { createStoreRoute } from "./create";
import { getAllStoresRoute } from "./list";
import { getStoreByIdRoute } from "./get-by-id";
import { deleteStoreRoute } from "./delete";

export const storesRoutes: RouteOptions[] = [
    createStoreRoute,
    getAllStoresRoute,
    getStoreByIdRoute,
    deleteStoreRoute
]