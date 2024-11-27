import { RouteObject } from "react-router-dom";
import { bookingsRoutes } from "../Bookings/routes";

export const crmRoutes: RouteObject[] = [
  {
    path: '/crm',
    children: [
      ...bookingsRoutes
    ]
  },
]