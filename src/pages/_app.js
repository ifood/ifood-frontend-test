import React from 'react'
import App from 'next/app'

import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import store from '../store'

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Head>
          <meta charSet='utf-8' />

          {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta
            name='description'
            content='Web site created using create-react-app'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
          <title>Spotifood</title>
        </Head>

        <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
