import 'jest-dom/extend-expect';

declare global {
  namespace jest {
    interface Matchers {
      toBeNull();
      toMatchSome(...matcher: Matchers<T>[]);
    }

    interface Expect {
      toBeNull();
      toMatchSome<T>(...matchers: Matchers<T>[]);
    }
  }
}
