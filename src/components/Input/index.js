/**
 *
 * Input
 *
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

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

  const onChangeHandler = ({ target: { value } }) => {
    let normalizedValue = value

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
      } else if (type === 'datetime-local') {
        const date = moment(value)
        if (date.isValid()) {
          normalizedValue = date.toISOString()
        } else {
          error = 'Data inválida'
        }
      }

      if (error) {
        setValidationError(error)
        return
      }

      setValidationError(null)
    }

    if (onChange) {
      onChange(normalizedValue, id)
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
