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
const DatePickertStyled = styled(DatePicker)``;

export default function Page({ onChange = () => {}, ...data }) {
  const handleChange = (value) => {
    onChange(data.id, moment(value).format('YYYY-MM-DDTHH:MM:SSZ'));
  };

  return (
    <DatePickerContainer>
      <DatePickerLabel>Date Time</DatePickerLabel>
      <DatePickertStyled defaultValue={0} showTime onChange={handleChange} />
    </DatePickerContainer>
  );
}
