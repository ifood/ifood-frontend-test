import React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DatePickerLabel = styled.span`
  color: red;
`;
const DatePickertStyled = styled(DatePicker)``;

export default function Page(data) {
  const handleChange = (value) => {
    data.onChange(value);
  };

  return (
    <DatePickerContainer>
      <DatePickerLabel>Date Time</DatePickerLabel>
      <DatePickertStyled
        format={data.validation?.pattern}
        defaultValue={0}
        onChange={handleChange}
      />
    </DatePickerContainer>
  );
}
