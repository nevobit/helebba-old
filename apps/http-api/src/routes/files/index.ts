import { RouteOptions } from "fastify";
import { uploadImageRoute } from "./image";

export const filesRoutes: RouteOptions[] = [
    uploadImageRoute,
];