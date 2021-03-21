import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyApp from '../src/pages/_app';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }: any) => (
  <MyApp Component={() => children} pageProps={{}} />
  // <ThemeProvider theme="light">
  //   <TranslationProvider messages={defaultStrings}>
  //     {children}
  //   </TranslationProvider>
  // </ThemeProvider>
);

const customRender = (ui: any, options = {}): unknown =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/user-event';

// override render method
export { customRender as render };
