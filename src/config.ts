export const { FOOTBALL_API_KEY } = process.env;

// `yarn dev` sets NODE_ENV to 'development'. Manually override this to hit external APIs
// `yarn build` sets NODE_ENV to 'production'.
const ENV = process.env.NODE_ENV || 'development';

export const IS_DEV_ENV = ENV === 'development';

// console.log('[config.ts] process.env.NODE_ENV', process.env.NODE_ENV, '\n');
// console.log('[config.ts] ENV', ENV, '\n');
// console.log('[config.ts] IS_DEV_ENV', IS_DEV_ENV, '\n');
