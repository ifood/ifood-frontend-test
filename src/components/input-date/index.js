import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

export function InputDate({ id, name, label, value, onChange }) {
  return (
    <Grid container>
      <InputLabel>{label}</InputLabel>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          fullWidth
          format='yyyy-MM-dd hh:mm:ss'
          id={id}
          value={value}
          onChange={e => onChange(name, e.toISOString())}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  )
}

InputDate.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

InputDate.defaultProps = {
  id: '',
  value: null
}
