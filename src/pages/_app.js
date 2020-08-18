import Head from 'next/head'
import { AuthProvider } from '../contexts/AutenthicationContext'
import { element, func, object, oneOfType } from 'prop-types'
import Layout from '../components/Layout'
import GlobalStyle from '../assets/styles/GlobalStyle'
import 'react-datepicker/dist/react-datepicker.css'
import { APP_DESCRIPTION, APP_NAME } from '../constants/project'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION}/>
      </Head>
      <GlobalStyle />
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: oneOfType([element, func]).isRequired,
  pageProps: object
}

MyApp.defaultProps = {
  pageProps: null
}

export default MyApp
