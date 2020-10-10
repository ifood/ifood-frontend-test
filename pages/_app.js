import '../styles/globals.css'
import '../styles/components.css'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { Fragment } from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer transition={Slide} />

    </Fragment>
  )

}

export default MyApp
