import { RouteObject } from 'react-router-dom';
import Configuration from '@/screens/Private/Options/Configuration';
import { Documents } from '@/screens/Private/Settings';

export const hashRoutes: RouteObject[] = [
   {
    path: '/',
    element: <></>,
    errorElement: <></>
  },
  {
    path: '/settings/configuration',
    element: <Configuration />,
    errorElement: <></>
  },
  {
    path: '/settings/documents',
    element: <Documents />,
    errorElement: <></>
  },
];
