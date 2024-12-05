import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import { routes } from './routes';
import { hashRoutes } from './hash-routes';
import { Suspense } from 'react';
import { LineScaleLoader } from '@helebba/design-system/web';

const router = createBrowserRouter(routes);
const routerHash = createHashRouter(hashRoutes);

const AppRouter = () => {
  return (
    <Suspense fallback={<LineScaleLoader />}>
      <RouterProvider router={routerHash} />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
