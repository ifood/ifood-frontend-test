import { AuthProvider } from '../contexts/Autenthication'
import { element, func, object, oneOfType } from 'prop-types'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
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
