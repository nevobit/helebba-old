import { RouteObject } from 'react-router-dom';
import Configuration from '@/screens/Private/Options/Configuration';
import { Documents } from '@/screens/Private/Settings';

export const hashRoutes: RouteObject[] = [
  {
    path: '/settings/configuration',
    element: <Configuration />,
  },
  {
    path: '/settings/documents',
    element: <Documents />,
  },
];
