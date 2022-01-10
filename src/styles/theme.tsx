import { ThemeProvider } from "styled-components";

import { themeDefault } from "../themes/default";
import { GlobalStyles } from "./globals";

const Theme = ({ children }: any) => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyles {...themeDefault} />
    {children}
  </ThemeProvider>
);

export default Theme;
