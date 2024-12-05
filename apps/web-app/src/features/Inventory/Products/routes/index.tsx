import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";
import Product from "../screens/Product";

export const productsRoutes: RouteObject[] = [
    {
        path: '/products',
        element: <Home />
    },
    {
        path: '/products/:id',
        element: <Product />
    },
]