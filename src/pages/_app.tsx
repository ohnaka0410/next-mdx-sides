import type { AppProps } from "next/app";
import "~/styles/globals.css";

/**
 * App Component
 */
const App: React.VFC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
