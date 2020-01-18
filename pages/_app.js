import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Head from "next/head";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Karla";
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  #__next {
    width: 100%;
    height: 100%;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head>
          <title>Minsky</title>
          <link rel={"icon"} href={"/favicon.ico"} />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />

          <link href="https://fonts.googleapis.com/css?family=Karla:400,700|Rubik&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
