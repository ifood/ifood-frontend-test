import React from 'react'; //eslint-disable-line
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import * as S from './styles';

interface IDatePicker {
  startDate: Date;
  onChangeDate(date: Date, event?: React.SyntheticEvent<any>): void;
}

export const DateField: React.FC<IDatePicker> = ({ startDate, onChangeDate }) => {
  return (
    <S.DateField>
      <label htmlFor="date-picker">Date</label>
      <DatePicker selected={startDate} onChange={onChangeDate} dateFormat="dd-MM-yyyy" id="date-picker" />
    </S.DateField>
  );
};
