/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { IS_PROD_ENV } from '../src/config'

if (!IS_PROD_ENV) {
  if (typeof window === 'undefined') {
    const { server } = require('./server')
    server.listen()
  } else {
    const { worker } = require('./browser')
    worker.start()
  }
}
