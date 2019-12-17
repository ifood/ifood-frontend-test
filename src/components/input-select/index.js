import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'

export function InputSelect({ id, name, label, value, options, onChange }) {
  return (
    <Grid container>
      <InputLabel>{label}</InputLabel>
      <Select
        fullWidth
        labelId={id}
        id={id}
        value={value}
        onChange={e => onChange(name, e.target.value)}
      >
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  )
}

InputSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  ),
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

InputSelect.defaultProps = {
  options: [],
  id: '',
  value: ''
}
