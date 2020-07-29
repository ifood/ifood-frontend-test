import { AuthProvider } from '../contexts/AutenthicationContext'
import { element, func, object, oneOfType } from 'prop-types'
import Layout from '../components/Layout'
import GlobalStyle from '../assets/styles/GlobalStyle'
import 'react-datepicker/dist/react-datepicker.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
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
