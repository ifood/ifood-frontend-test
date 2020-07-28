import { useState, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ptBR } from 'date-fns/locale'
import { func, string } from 'prop-types'

registerLocale('pt-BR', ptBR)

const Datetime = ({ id, onChange, text }) => {
  const [selectedDate, setSelectedDate] = useState()

  useEffect(() => {
    if (selectedDate) {
      onChange(id, new Date(selectedDate).getTime())
    }
  }, [id, onChange, selectedDate])

  return (
    <div>
      <label>{text}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
    </div>
  )
}

Datetime.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  text: string.isRequired
}

export default Datetime
