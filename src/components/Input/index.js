/**
 *
 * Input
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper } from './styles'

function Input({ type, id }) {
  return (
    <InputWrapper>
      <input id={id} type={type} autoComplete="off" placeholder=" " />
    </InputWrapper>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default Input
