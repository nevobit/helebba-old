import { RouteObject } from "react-router-dom";
import { productsRoutes } from "../Products/routes";

export const inventoryRoutes: RouteObject[] = [
  {
    children: [
      ...productsRoutes
    ]
  },
]