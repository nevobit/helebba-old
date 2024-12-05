import { RouteObject } from "react-router-dom";
import Accounts from "../screens/Home";
import NewAccount from "../screens/New";

export const accountsRoutes: RouteObject[] = [
  {
    path: 'accounts',
    element: <Accounts />
  },
  {
    path: '/accounts/new',
    element: <NewAccount />
  },
]