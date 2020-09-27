import React from 'react';
import PropTypes from 'prop-types';
import { StatefulInput } from 'baseui/input';
import { debounce } from 'lodash';

const FormInteger = ({
  id,
  value,
  placeholder,
  validation,
  debounceTime,
  onChange,
}) => {
  const { min, max } = validation;
  let debouncedFn;

  const handleChange = (e) => {
    e.persist();

    if (!debouncedFn) {
      debouncedFn = debounce(
        () => onChange({ field: id, value: e.target.value }),
        debounceTime,
      );
    }
    debouncedFn();
  };

  return (
    <StatefulInput
      id={id}
      type="number"
      min={min}
      max={max}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

FormInteger.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validation: PropTypes.shape({ min: PropTypes.number, max: PropTypes.number }),
  debounceTime: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

FormInteger.defaultProps = {
  value: '',
  placeholder: '',
  validation: {
    min: 0,
    max: 100,
  },
  debounceTime: 0,
};

export default FormInteger;
