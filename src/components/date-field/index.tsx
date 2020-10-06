import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface IDatePicker {
  startDate: Date;
  onChangeDate(date: Date, event: React.SyntheticEvent<any> | undefined): void;
}

export const DateField: React.FC<IDatePicker> = ({ startDate, onChangeDate }) => {
  return <DatePicker selected={startDate} onChange={onChangeDate} dateFormat="dd-MM-yyyy" />;
};
