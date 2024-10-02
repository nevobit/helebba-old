import { RouteOptions } from 'fastify';
import { loginRoute } from './login';
import { codeVerificationRoute } from './code-verification';
import { loginGoogleRoute } from './login-google';

export const authRoutes: RouteOptions[] = [
  loginRoute,
  codeVerificationRoute,
  loginGoogleRoute
]
