import React from 'react'
import PropTypes from 'prop-types'
import { has, get } from 'lodash'
import { StyledFormField } from './styles'

const FormField = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    name,
    label,
    type,
    select,
    disabled,
    className,
    inputPropsTF,
    placeholder,
  } = props

  return (
    <StyledFormField
      disabled={disabled}
      className={className}
      label={label}
      name={name}
      value={get(values, name)}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={has(errors, name) && get(errors, name)}
      error={has(errors, name)}
      margin="normal"
      variant="outlined"
      inputProps={{ type: type }}
      InputProps={{ ...inputPropsTF }}
      select={select}
      placeholder={placeholder}
    >
      {props.children}
    </StyledFormField>
  )
}

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  select: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  inputPropsTF: PropTypes.object,
  formatChars: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
}

FormField.defaultProps = {
  type: 'text',
  select: false,
  className: '',
  onClick: () => {},
  inputPropsTF: {},
  disabled: false,
}

export default FormField
