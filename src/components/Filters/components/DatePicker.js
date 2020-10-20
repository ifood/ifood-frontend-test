import React from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DatePickerLabel = styled.span`
  color: red;
`;
const DatePickertStyled = styled(AntdDatePicker)`
  border-radius: 6px;
`;

export default function DatePicker({ onChange, id }) {
  const handleChange = (value) => {
    onChange(id, moment(value).format('YYYY-MM-DDTHH:MM:SSZ'));
  };

  return (
    <DatePickerContainer aria-label="spotifood-filter-date-time-container">
      <DatePickerLabel aria-label="spotifood-filter-date-time-text">
        Date Time
      </DatePickerLabel>
      <DatePickertStyled
        defaultValue={0}
        showTime
        onChange={handleChange}
        aria-label="spotifood-filter-date-time-picker"
      />
    </DatePickerContainer>
  );
}

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
