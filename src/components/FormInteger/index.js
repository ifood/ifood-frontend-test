import React from 'react';
import PropTypes from 'prop-types';
import { StatefulInput } from 'baseui/input';
import { debounce } from 'lodash';

const FormInteger = ({
  id,
  value,
  placeholder,
  min,
  max,
  debounceTime,
  onChange,
}) => {
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
  min: PropTypes.number,
  max: PropTypes.number,
  debounceTime: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

FormInteger.defaultProps = {
  value: '',
  placeholder: '',
  min: 0,
  max: 100,
  debounceTime: 0,
};

export default FormInteger;
