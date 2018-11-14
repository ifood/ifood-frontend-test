import React from 'react';
import PropTypes from 'prop-types';
import '../styles/inputFilter.scss';

const InputFilter = ({
  id,
  label,
  onChange,
  validation,
  value,
  ...others,
}) => {
  const validationPropsFormatted = {  }

  if (validation.primitiveType.toUpperCase() === 'STRING') {
    validationPropsFormatted.type = 'text';
    validationPropsFormatted.placeholder = validation.pattern || '';
  } else {
    validationPropsFormatted.type = 'number';
  }

  return (
    <label
      className={`inputFilter ${others.className || ''}`}
      htmlFor={id}
    >
      {label}
      <input
        id={id}
        value={value}
        onChange={onChange}
        {...validationPropsFormatted}
        {...others}
      />
    </label>
  );
};

InputFilter.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validation: PropTypes.object.isRequired,
  value: PropTypes.string,
}

export default InputFilter;
