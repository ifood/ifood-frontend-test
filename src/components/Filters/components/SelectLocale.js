import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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

export default function SelectLocale({ onChange, values = [], id }) {
  const handleChange = (value) => {
    onChange(id, value);
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
        {values?.map((item) => (
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

SelectLocale.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.any).isRequired,
};
