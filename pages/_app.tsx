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
          <title>Frontend Boilerplate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
