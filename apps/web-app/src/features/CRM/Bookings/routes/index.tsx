import { RouteObject } from "react-router-dom";
import { Home } from "../screens";
import RedirectHome from "../screens/RedirectHome";
import Schedules from "../screens/Schedules";
import CustomFields from "../screens/CustomFields";
import PublicPage from "../screens/PublicPage";

export const bookingsRoutes: RouteObject[] = [
  {
    path: '/crm/bookings',
    element: <RedirectHome />
  },
  {
    path: '/crm/bookings/:id',
    element: <Home />
  },
  {
    path: '/crm/bookings/:id/schedules',
    element: <Schedules />
  },
  {
    path: '/crm/bookings/:id/custom-fields',
    element: <CustomFields />
  },
  {
    path: '/crm/bookings/:id/public-page',
    element: <PublicPage />
  }
]