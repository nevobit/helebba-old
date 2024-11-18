import { RouteObject } from "react-router-dom";
import Home from '../screens/Home';

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];