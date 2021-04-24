import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import 'jest-extended';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../src/pages/_app';
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

// const Providers = ({ children }: any) => (
// <ThemeProvider theme="light">
//   <TranslationProvider messages={defaultStrings}>
//     {children}
//   </TranslationProvider>
// </ThemeProvider>
// );

export const wrapperWithQueryClient = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
const customRender = (ui: any, options = {}): unknown =>
  render(ui, { wrapper: wrapperWithQueryClient, ...options });

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
