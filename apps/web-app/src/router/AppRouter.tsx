import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import { routes } from './routes';
import { hashRoutes } from './hash-routes';

const router = createBrowserRouter(routes);
const hashRouter = createHashRouter(hashRoutes);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={hashRouter} />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
