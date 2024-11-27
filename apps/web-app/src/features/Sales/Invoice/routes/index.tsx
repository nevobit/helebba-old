import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";

export const invoiceRoutes: RouteObject[] = [
    {
        path: '/sales/revenue',
        element: <Home />
    },
]