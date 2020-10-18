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
const InputNumbertStyled = styled(InputNumber)`
  border-radius: 6px;
`;

export default function Amount({ onChange = () => {}, ...data }) {
  const handleChange = (value) => {
    if (value >= 50) return;
    onChange(data.id, value);
  };

  return (
    <InputNumberContainer aria-label="spotifood-filter-amount-container">
      <InputNumberLabel aria-label="spotifood-filter-amount-text">
        Amount
      </InputNumberLabel>
      <InputNumbertStyled
        defaultValue={20}
        min={1}
        max={50}
        onChange={handleChange}
        type="number"
        aria-label="spotifood-filter-amount-number-input"
      />
    </InputNumberContainer>
  );
}
