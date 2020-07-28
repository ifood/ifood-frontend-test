import { element } from 'prop-types'

const Layout = ({ children }) => {
  return <main>{children}</main>
}

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
