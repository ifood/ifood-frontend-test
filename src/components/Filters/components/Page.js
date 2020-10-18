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

export default function Page({ onChange = () => {}, ...data }) {
  const handleChange = (value) => {
    onChange(data.id, value);
  };

  return (
    <InputNumberContainer aria-label="spotifood-filter-page-container">
      <InputNumberLabel aria-label="spotifood-filter-page-text">
        Page
      </InputNumberLabel>
      <InputNumbertStyled
        aria-label="spotifood-filter-page-number-input"
        defaultValue={0}
        onChange={handleChange}
        type="number"
      />
    </InputNumberContainer>
  );
}
