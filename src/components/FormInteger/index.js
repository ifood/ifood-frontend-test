import React from 'react';
import PropTypes from 'prop-types';
import { StatefulInput } from 'baseui/input';

const FormInteger = ({ id, value, placeholder, validation, onChange }) => {
  const { min, max } = validation;
  return (
    <StatefulInput
      id={id}
      type="number"
      min={min}
      max={max}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange({ field: id, value: e.target.value })}
    />
  );
};

FormInteger.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
  onChange: PropTypes.func.isRequired,
};

FormInteger.defaultProps = {
  value: '',
  placeholder: '',
  validation: {
    min: 0,
    max: 100,
  },
};

export default FormInteger;
