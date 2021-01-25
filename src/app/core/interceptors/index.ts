import { ServerErrorInterceptor } from './server-error.interceptor';
import { HttpTokenInterceptor } from './http.token.interceptor';

export const interceptors: any[] = [
  ServerErrorInterceptor,
  HttpTokenInterceptor,
];

export * from './server-error.interceptor';
export * from './http.token.interceptor';
