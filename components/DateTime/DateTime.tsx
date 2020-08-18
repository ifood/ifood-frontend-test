import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import { FiCalendar } from 'react-icons/fi';
import { Container } from './styles';

interface DateTimeProps {
  id: string;
  name: string;
  onChange: (filterName: string, value: Date) => any;
}

registerLocale('pt-br', ptBR);

const DateTime: React.FC<DateTimeProps> = ({ id, name, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(null);
  const [calendarActive, setCalendarActive] = useState(false);

  const handleChange = date => {
    setSelectedDate(date);
    onChange(id, date);
  };

  return (
    <Container className="wrapper-filter-input" active={calendarActive}>
      <label>Data e Hora</label>
      <DatePicker
        className="filter-input"
        selected={selectedDate}
        onChange={date => handleChange(date)}
        onCalendarOpen={() => setCalendarActive(true)}
        onCalendarClose={() => setCalendarActive(!!selectedDate)}
        locale="pt-br"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      <FiCalendar />
    </Container>
  );
};

export default DateTime;
