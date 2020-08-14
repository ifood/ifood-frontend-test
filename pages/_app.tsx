import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Spotifood</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
