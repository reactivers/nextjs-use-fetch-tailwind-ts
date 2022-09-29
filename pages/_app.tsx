import AppFetchProvider from "components/AppFetchProvider";
import Layout from "components/Layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppFetchProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppFetchProvider>
    </>
  );
}

export default MyApp;
