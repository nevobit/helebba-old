import { RouteObject } from "react-router-dom";
import Home from "../screens/Home";
import Layout from "../components/Layout";
import Summary from "../screens/Summary";

export const myZoneRoutes: RouteObject[] = [
  {
    path: '/employees/me',
    element: <Home />
  },
  {
    path: '/employees',
    element: <Layout />,
    children: [
      {
        path: '/employees/summary',
        element: <Summary />
      }
    ]
  }
]