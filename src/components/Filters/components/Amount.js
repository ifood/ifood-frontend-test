import React from 'react';
import { InputNumber } from 'antd';
import styled from 'styled-components';

const InputNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputNumberLabel = styled.span`
  color: red;
`;
const InputNumbertStyled = styled(InputNumber)``;

export default function Amount(data) {
  const handleChange = (value) => {
    if (value >= 50) return;
    data.onChange(value);
  };

  return (
    <InputNumberContainer>
      <InputNumberLabel>Amount</InputNumberLabel>
      <InputNumbertStyled
        defaultValue={20}
        min={1}
        max={50}
        onChange={handleChange}
      />
    </InputNumberContainer>
  );
}
