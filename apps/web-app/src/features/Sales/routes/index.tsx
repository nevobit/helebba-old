import { RouteObject } from "react-router-dom";
import { invoiceRoutes } from "../Invoice/routes";
import { serviceRoutes } from "../Services/routes";

export const salesRoutes: RouteObject[] = [
  {
    children: [
      ...invoiceRoutes,
      ...serviceRoutes
    ]
  },
]