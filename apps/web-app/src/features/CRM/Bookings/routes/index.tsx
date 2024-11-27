import { RouteObject } from "react-router-dom";
import { Home } from "../screens";

export const bookingsRoutes: RouteObject[] = [
  {
    path: '/crm/bookings',
    element: <Home />
  },
]