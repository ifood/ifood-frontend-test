import React from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  formControl: {
    width: '100%'
  }
})

export function InputDate({ id, name, label, value, onChange, format }) {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          fullWidth
          format={format}
          label={label}
          id={id}
          value={value}
          onChange={e => onChange(name, e.toISOString())}
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  )
}

InputDate.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  format: PropTypes.string
}

InputDate.defaultProps = {
  id: '',
  value: null,
  format: 'yyyy-MM-dd hh:mm:ss'
}
