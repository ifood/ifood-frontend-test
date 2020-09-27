import React from 'react';
import PropTypes from 'prop-types';
import { StatefulDatePicker } from 'baseui/datepicker';
import { format } from 'date-fns';

const FormDatepicker = ({ id, value, onChange }) => {
  return (
    <StatefulDatePicker
      id={id}
      value={value}
      onChange={({ date }) =>
        date &&
        onChange({ field: id, value: format(date, "yyyy-MM-dd'T'HH:mm:ss") })
      }
      formatString="yyyy-MM-dd HH:mm:ss"
      mask="9999/99/99 99:99:99"
      timeSelectStart
    />
  );
};

FormDatepicker.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormDatepicker.defaultProps = {
  value: '',
};

export default FormDatepicker;
