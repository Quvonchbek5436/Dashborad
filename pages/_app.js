import { ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import store from "../Redux/store";
import makeTheme from "../styles/makeTheme";
import inputGlobalStyles from "../styles/GlobalStyle";
import Head from "next/head";
import ThemeComponent from "../components/ThemeComponent";

// export const DarkModeContext = createContext({
//   mode: "light",
//   toggleMode: () => {},
// });

function MyApp({ Component, ...pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="%PUBLIC_URL%/favicon-32x32.png" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
          <ThemeComponent>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeComponent>
      </Provider>
    </>
  );
}

export default MyApp;
