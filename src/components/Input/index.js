/**
 *
 * Input
 *
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { InputWrapper } from './styles'
import Text from '../Text'

function Input({
  id,
  type,
  onChange,
  validation,
  ...rest
}) {
  const [validationError, setValidationError] = useState()

  const onChangeHandler = (e) => {
    const { target: { value } } = e

    if (validation) {
      const {
        min,
        max,
      } = validation

      let error = null
      if (type === 'number') {
        if (min && value < min) {
          error = 'Valor menor que o mínimo'
        } else if (max && value > max) {
          error = 'Valor maior que o máximo'
        }
      }

      if (error) {
        setValidationError(error)
        return
      }

      setValidationError(null)
    }

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
      <Text small semiBold error>
        {validationError}
      </Text>
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
