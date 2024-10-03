import { RouteOptions } from 'fastify';
import { loginRoute } from './login';
import { codeVerificationRoute } from './code-verification';
import { loginGoogleRoute } from './login-google';
import { registerRoute } from './register';

export const authRoutes: RouteOptions[] = [
  loginRoute,
  codeVerificationRoute,
  loginGoogleRoute,
  registerRoute
]
