import "~/styles/globals.css";
import type { AppProps } from "next/app";

const App: React.VFC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />;
};

module.exports = App;
