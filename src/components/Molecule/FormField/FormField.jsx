import React from 'react'
import PropTypes from 'prop-types'
import { has, get } from 'lodash'
import TextField from '@material-ui/core/TextField'

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
    size,
  } = props

  return (
    <TextField
      disabled={disabled}
      className={className}
      label={label}
      name={name}
      value={get(values, name) || ''}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={has(errors, name) && get(errors, name)}
      error={has(errors, name)}
      margin="normal"
      variant="outlined"
      select={select}
      placeholder={placeholder}
      size={size}
      fullWidth
      inputProps={{ type: type }}
      InputProps={{ ...inputPropsTF }}
      SelectProps={{
        MenuProps: { disablePortal: true },
      }}
    >
      {props.children}
    </TextField>
  )
}

FormField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  select: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  inputPropsTF: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.string,
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
