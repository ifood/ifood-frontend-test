import React, { useState } from 'react';

import { DateField } from 'components/date-field';
import { Select } from 'components/select';
import { Input } from 'components/input';

interface IFilter {
  item: any;
}

export const Filter: React.FC<IFilter> = ({ item }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };

  const renderFilter = (i: string) => {
    switch (i) {
      case 'locale':
        return <Select />;
      case 'country':
        return <Select />;
      case 'timestamp':
        return <DateField startDate={startDate} onChangeDate={(date) => handleDateChange(date)} />;
      case 'limit':
        return <Input id="input-limit" onChange={() => {}} />;
      case 'offset':
        return <Input id="input-offset" onChange={() => {}} />;
      default:
        return false;
    }
  };

  return (
    <>
      <h1>Filter</h1>

      {item.map((i: any) => renderFilter(i.id))}
    </>
  );
};
