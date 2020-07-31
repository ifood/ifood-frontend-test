import { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale'
import { func, string } from 'prop-types'
import styled from 'styled-components'

registerLocale('pt-BR', ptBR)

const Datetime = ({ id, onChange, text }) => {
  const [selectedDate, setSelectedDate] = useState()
  const [calendarActive, setCalendarActive] = useState(false)

  useEffect(() => {
    if (selectedDate) {
      onChange(id, selectedDate)
    }
  }, [id, onChange, selectedDate])

  return (
    <DatetimeStyle
      calendarActive={calendarActive}
      className="wrapper-filter-input"
    >
      <DatePicker
        className="filter-input"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        onCalendarOpen={() => setCalendarActive(true)}
        onCalendarClose={() => setCalendarActive(selectedDate ? true : false)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      <label id="label-datetime">{text}</label>
    </DatetimeStyle>
  )
}

const CalendarActiveStyle = `
  & .react-datepicker-wrapper .filter-input {
    border-color: white;
    color: white;
  }

  #label-datetime {
    color: white;
    top: -10px;
    z-index: 1;
  }
`

const DatetimeStyle = styled.div`
  .react-datepicker-wrapper {
    width: 100%;

    input {
      color: white;
    }
  }

  ${({ calendarActive }) => (calendarActive ? CalendarActiveStyle : '')}
`

Datetime.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  text: string.isRequired
}

export default Datetime
