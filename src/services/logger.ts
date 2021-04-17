const disabledLogger = {
  log: () => {},
};

// eslint-disable-next-line no-console
const logger = console;

export default process.env.NODE_ENV === 'test' ? disabledLogger : logger;
