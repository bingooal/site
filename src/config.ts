/* eslint-disable no-console */
export const { FOOTBALL_API_KEY, FOOTBALL_API_KEY_2 } = process.env;

// `yarn dev` sets NODE_ENV to 'development'
// `yarn test` sets NODE_ENV to 'test'
// `yarn build` sets NODE_ENV to 'production'
export const IS_PROD_ENV = process.env.NODE_ENV === 'production';
// export const IS_PROD_ENV = true;
// export const IS_PROD_ENV = false;

// console.log('[config.ts] process.env.NODE_ENV', process.env.NODE_ENV, '\n');
// console.log('[config.ts] IS_PROD_ENV', IS_PROD_ENV, '\n');
