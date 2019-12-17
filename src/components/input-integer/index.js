import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'

export function InputInteger({
  validation,
  id,
  name,
  label,
  value,
  min,
  onChange
}) {
  if (validation) {
    return (
      <div>
        <InputLabel>{label}</InputLabel>
        <Slider
          id={id}
          aria-label={label}
          name={name}
          value={value || validation.min || 0}
          min={validation.min}
          max={validation.max}
          onChange={(_, val) => onChange(name, val)}
          valueLabelDisplay='auto'
        />
      </div>
    )
  }

  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <TextField
        id={id}
        // label={label}
        type='number'
        fullWidth
        name={name}
        value={value}
        min={0}
        onChange={e => {
          const newValue = +e.target.value
          onChange(name, newValue < min ? min : newValue)
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  )
}

InputInteger.propTypes = {
  validation: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number
  }),
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

InputInteger.defaultProps = {
  validation: {},
  id: '',
  min: 0
}
