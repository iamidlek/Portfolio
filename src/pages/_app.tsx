import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { HomePage } from "../components/Layout/HomePageStyle";
import Nav from "../components/NavBar/Nav";
import Theme from "../styles/theme";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Theme>
      <HomePage>
        <Nav />
        <Component {...pageProps} />
      </HomePage>
    </Theme>
  );
}
