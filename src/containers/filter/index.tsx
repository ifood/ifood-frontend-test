import React, { useState } from 'react';

import { DateField } from 'components/date-field';

//locale
//country
//timestamp
//limit
//offset

export const Filter: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <>
      <h1>Filter</h1>
      <DateField startDate={startDate} onChangeDate={(date) => handleDateChange(date)} />
    </>
  );
};
