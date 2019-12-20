import React from 'react'
import PropTypes from 'prop-types'

export function ErrorMessage({ message }) {
  return <div>{message}</div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string
}

ErrorMessage.defaultProps = {
  message: 'An error has occurred :('
}
