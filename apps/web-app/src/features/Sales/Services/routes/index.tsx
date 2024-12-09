import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";

export const serviceRoutes: RouteObject[] = [
    {
        path: '/services',
        element: <Home />
    },
]