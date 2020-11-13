import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DynamicImport extends Component {
  state = {
    component: null,
  }

  componentDidMount() {
    const { loadComponent, ErrorComponent } = this.props

    try {
      loadComponent()
        .then((comp) => {
          comp.default
            ? this.setState({ Component: comp.default })
            : this.setState({ Component: ErrorComponent })
        })
        .catch(() => {
          this.setState({ Component: ErrorComponent })
        })
    } catch {
      this.setState({ Component: ErrorComponent })
    }
  }

  render() {
    const { LoadingComponent } = this.props
    const { Component } = this.state

    return Component ? <Component /> : <LoadingComponent />
  }
}

DynamicImport.defaultProps = {
  ErrorComponent: () => <div id="error">Error</div>,
  LoadingComponent: () => <div id="loading">Loading...</div>,
}

DynamicImport.propTypes = {
  loadComponent: PropTypes.func.isRequired,
  LoadingComponent: PropTypes.func,
  ErrorComponent: PropTypes.func,
}

export default DynamicImport
