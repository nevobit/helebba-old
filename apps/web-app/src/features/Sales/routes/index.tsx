import { RouteObject } from "react-router-dom";
import { invoiceRoutes } from "../Invoice/routes";

export const salesRoutes: RouteObject[] = [
  {
    path: '/sales',
    children: [
      ...invoiceRoutes
    ]
  },
]