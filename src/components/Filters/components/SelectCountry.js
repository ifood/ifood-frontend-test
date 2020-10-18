import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

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
  height: 2rem !important;

  .ant-select-selector {
    border-radius: 6px !important;
    padding: 1rem;
  }
`;

export default function SelectCountry({ onChange = () => {}, ...data }) {
  const handleChange = (value) => {
    onChange(data.id, value === 'en_US' ? 'US' : value);
  };

  return (
    <SelectContainer>
      <SelectLabel>Country</SelectLabel>
      <SelectStyled onChange={handleChange}>
        {data.values?.map((item) => {
          return (
            <Option key={item.value} value={item.value}>
              {item.name}
            </Option>
          );
        })}
      </SelectStyled>
    </SelectContainer>
  );
}
