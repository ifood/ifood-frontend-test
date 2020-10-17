import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import locales from './enums/locales';

const { Option } = Select;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SelectLabel = styled.span`
  color: red;
`;
const SelectStyled = styled(Select)`
  width: 10rem;
`;

export default function SelectLocale(data) {
  const handleChange = (value) => {
    data.onChange(value);
  };

  return (
    <SelectContainer>
      <SelectLabel>Locale</SelectLabel>
      <SelectStyled onChange={handleChange}>
        {data.values?.map((item) => (
          <Option value={item.value}>{locales[item.value]}</Option>
        ))}
      </SelectStyled>
    </SelectContainer>
  );
}
