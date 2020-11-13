import React from 'react'
import PropTypes from 'prop-types'
import { has, get } from 'lodash'
import { format as formatDefault, isValid } from 'date-fns'
import { DateTimePicker } from '@material-ui/pickers'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'

const DateTimeField = (props) => {
  const {
    values,
    errors,
    name,
    label,
    className,
    setFieldValue,
    setFieldTouched,
    format,
    size,
    disabled,
    userDateFormat,
  } = props

  const handleChange = (date) => {
    setFieldValue(name, formatDefault(date, format) || '')
  }

  const handleClear = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setFieldValue(name, '')
  }

  const handleBlur = () => {
    setFieldTouched(name, true)
  }

  const formatDefaultData = (date) => {
    if (!isValid(date)) return ''

    return formatDefault(new Date(date), userDateFormat)
  }

  return (
    <DateTimePicker
      disabled={disabled}
      allowKeyboardControl
      className={className}
      label={label}
      name={name}
      value={get(values, name) || null}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={has(errors, name) && get(errors, name)}
      error={has(errors, name)}
      margin="normal"
      inputVariant="outlined"
      size={size}
      ampm={false}
      labelFunc={formatDefaultData}
      fullWidth
      InputProps={{
        startAdornment: (
          <IconButton onClick={handleClear} style={{ order: 1 }}>
            <Close color="disabled" fontSize="small" />
          </IconButton>
        ),
      }}
    />
  )
}

DateTimeField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  className: PropTypes.string,
  format: PropTypes.string,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  userDateFormat: PropTypes.string,
}

DateTimeField.defaultProps = {
  className: '',
  disabled: false,
  format: 'dd/MM/yyyy HH:mm',
  userDateFormat: 'dd/MM/yyyy HH:mm',
}

export default DateTimeField
