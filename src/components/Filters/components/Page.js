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
    <InputNumberContainer>
      <InputNumberLabel>Page</InputNumberLabel>
      <InputNumbertStyled defaultValue={0} onChange={handleChange} />
    </InputNumberContainer>
  );
}
