import React from 'react'; //eslint-disable-line
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import * as S from './styles';

interface IDatePicker {
  startDate: Date;
  onChangeDate(date: Date, event: React.SyntheticEvent<any> | undefined): void;
}

export const DateField: React.FC<IDatePicker> = ({ startDate, onChangeDate }) => {
  return (
    <S.DateField>
      <DatePicker selected={startDate} onChange={onChangeDate} dateFormat="dd-MM-yyyy" />
    </S.DateField>
  );
};
