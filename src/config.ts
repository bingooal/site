/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
// Don't destructure process.env because: https://github.com/vercel/next.js/pull/20869/files
export const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY;
export const FOOTBALL_API_KEY_2 = process.env.FOOTBALL_API_KEY_2;

// `yarn dev` sets NODE_ENV to 'development'
// `yarn test` sets NODE_ENV to 'test'
// `yarn build` sets NODE_ENV to 'production'
export const IS_PROD_ENV = process.env.NODE_ENV === 'production';
// export const IS_PROD_ENV = true;
// export const IS_PROD_ENV = false;

export const IS_TEST_ENV = process.env.NODE_ENV === 'test';

// console.log('[config.ts] process.env.NODE_ENV', process.env.NODE_ENV, '\n');
// console.log('[config.ts] IS_PROD_ENV', IS_PROD_ENV, '\n');
