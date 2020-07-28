import { AuthProvider } from '../contexts/AutenthicationContext'
import { element, func, object, oneOfType } from 'prop-types'
import Layout from '../components/Layout'
import 'react-datepicker/dist/react-datepicker.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
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
