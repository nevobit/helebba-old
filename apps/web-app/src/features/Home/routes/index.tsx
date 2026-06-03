import { RouteObject } from "react-router-dom";
import Home from '../screens/Home';
import Board from '../screens/Board';


export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/boards',
    element: <Board />,
  },
];