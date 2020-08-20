/**
 *
 * Input
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { InputWrapper } from './styles'

function Input({
  id,
  type,
  onChange,
  validation,
  ...rest
}) {
  const onChangeHandler = (e) => {
    if (onChange) {
      onChange(e, id, validation)
    }
  }

  return (
    <InputWrapper>
      <input
        {...rest}
        id={id}
        type={type}
        autoComplete="off"
        placeholder=" "
        onChange={onChangeHandler}
      />
    </InputWrapper>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  validation: PropTypes.object,
}

export default Input
