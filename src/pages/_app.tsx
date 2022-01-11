import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { HomePage } from "../components/Layout/HomePageStyle";
import Nav from "../components/NavBar/Nav";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }: any) {
  return (
    <Theme>
      <HomePage>
        <Nav />
        <Component {...pageProps} />
      </HomePage>
    </Theme>
  );
}
