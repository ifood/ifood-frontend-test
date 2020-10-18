import React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DatePickerLabel = styled.span`
  color: red;
`;
const DatePickertStyled = styled(DatePicker)`
  border-radius: 6px;
`;

export default function Page({ onChange = () => {}, ...data }) {
  const handleChange = (value) => {
    onChange(data.id, moment(value).format('YYYY-MM-DDTHH:MM:SSZ'));
  };

  return (
    <DatePickerContainer aria-label="spotifood-filter-date-time-container">
      <DatePickerLabel aria-label="spotifood-filter-date-time-text">
        Date Time
      </DatePickerLabel>
      <DatePickertStyled
        defaultValue={0}
        showTime
        onChange={handleChange}
        aria-label="spotifood-filter-date-time-picker"
      />
    </DatePickerContainer>
  );
}
