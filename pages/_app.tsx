import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet="utf-8" />
          <title>42Manito</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
