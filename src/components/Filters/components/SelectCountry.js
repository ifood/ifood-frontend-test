import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function SelectCountry({ onChange, values = [], id }) {
  const handleChange = (value) => {
    onChange(id, value === 'en_US' ? 'US' : value);
  };

  return (
    <SelectContainer aria-label="spotifood-filter-country-container">
      <SelectLabel aria-label="spotifood-filter-country-text">
        Country
      </SelectLabel>
      <SelectStyled
        aria-label="spotifood-filter-country-select"
        onChange={handleChange}
      >
        {values?.map((item) => {
          return (
            <Option
              aria-label={`spotifood-filter-country-select-${item.name}-option`}
              key={item.value}
              value={item.value}
            >
              {item.name}
            </Option>
          );
        })}
      </SelectStyled>
    </SelectContainer>
  );
}

SelectCountry.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.any).isRequired,
};
