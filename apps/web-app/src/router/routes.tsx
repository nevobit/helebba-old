import { RouteObject } from 'react-router-dom';
import App from '../App';
import { ErrorBoundary } from '../screens';
import GuardRoute from '@/guards';
import { Login } from '@/features/Authentication';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <GuardRoute privateValidation />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/home',
        element: <App />
      }
    ]
  },
];
