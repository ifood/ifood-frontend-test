import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerElement = () => (
  <DatePicker
    // selected={}
    onSelect={(e) => console.log(e)} //when day is clicked
    onChange={(e) => console.log(e)} //only when value has changed
  />
)

export default DatePickerElement
