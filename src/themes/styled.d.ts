import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      title: string;
      main: string;
    };
    colors: {
      primary1: string;
      nomal: string;
      background1: string;
      button: string;
      gradientBackground: string;
      gradientBackground2: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
