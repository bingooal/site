/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { IS_PROD_ENV } from '../src/config';

if (!IS_PROD_ENV) {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    const { server } = require('./server');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = require('./browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
}
