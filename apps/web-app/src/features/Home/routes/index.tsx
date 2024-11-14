import { RouteObject } from "react-router-dom";
import Accounts from "../screens/Home";
import NewAccount from "@/features/Accounts/screens/New";

export const homeRoutes: RouteObject[] = [
  {
    path: 'accounts',
    element: <Accounts />,
  },
  {
    path: '/accounts/new',
    element: <NewAccount />,
  },
];