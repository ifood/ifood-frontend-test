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

export default function SelectLocale({ onChange = () => {}, ...data }) {
  const handleChange = (value) => {
    onChange(data.id, value);
  };

  return (
    <SelectContainer aria-label="spotifood-filter-locale-container">
      <SelectLabel aria-label="spotifood-filter-locale-container">
        Locale
      </SelectLabel>
      <SelectStyled
        aria-label="spotifood-filter-locale-container"
        onChange={handleChange}
      >
        {data.values?.map((item) => (
          <Option
            aria-label={`spotifood-filter-locale-select-${item.name}-option`}
            key={item.value}
            value={item.value}
          >
            {locales[item.value]}
          </Option>
        ))}
      </SelectStyled>
    </SelectContainer>
  );
}
