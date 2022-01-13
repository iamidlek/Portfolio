import { DefaultTheme } from "styled-components";

export const themeDefault: DefaultTheme = {
  fonts: {
    title: "Noto Sans KR, sans-serif",
    main: "Noto Sans KR, sans-serif",
  },
  colors: {
    primary1: "#E8EBEA",
    nomal: "#383f9e",
    button: "#EBDDC3",
    background1: "#E8EBEA",
    gradientBackground:
      "linear-gradient(184deg, rgba(222,213,255,1) 0%, rgba(81,90,218,1) 100%)",
    gradientBackground2:
      "linear-gradient(184deg, rgba(141,116,235,1) 0%, rgba(81,90,218,1) 100%)",
  },
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 850px)",
    lg: "screen and (max-width: 1024px)",
  },
};
