/*
 * Example usage
 * expect.toMatchSome(expect.any(String), expect.any(Number))
 * expect(7).toMatchSome(expect.any(String), expect.any(Number))
 * Passes if at least one matcher passes
 */
expect.extend({
  toMatchSome(received, ...matchers) {
    const pass = matchers.some((matcher) => matcher.asymmetricMatch(received));

    return {
      message: (): string =>
        `expected ${received} to match at least one matcher`,
      pass,
    };
  },
});

expect.extend({
  toBeNull(received) {
    return {
      message: (): string => `expected ${received} to be null`,
      pass: received === null,
    };
  },
});

export {};
