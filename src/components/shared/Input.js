import React from 'react';
import InputMask from 'react-input-mask';

const PRIMITIVE_TYPE = {
  STRING: 'text',
  INTEGER: 'number',
};

const formatChars = {
  'y': '[0-9]',
  'M': '[0-9]',
  'd': '[0-9]',
  'H': '[0-9]',
  'm': '[0-9]',
  's': '[0-9]'
}

const validationProps = props =>
  Object.keys(props).reduce((prev, current) =>
    ['min', 'max'].indexOf(current) > -1 ?
      {...prev, [current]: props[current] } : prev
  , {})

const Input = ({
  name = '',
  type = 'text',
  validation = {},
  placeholder = '',
  onChange = () => {},
  value = ''
}) => {

  const handleInputChange = ev => {
    const value = ev.target.value;
    if (validation.min && Number(value) < validation.min) {
      return;
    }
    if (validation.max && Number(value) > validation.max) {
      return;
    }
    onChange(ev);
  }
  const defaultProps = {
    className: "form-control",
    name,
    value,
    placeholder,
    onChange: handleInputChange
  };
  const additionalProps = validationProps(validation);

  return  validation.pattern ?
    <InputMask
      type="text"
      mask={validation.pattern}
      formatChars={formatChars}
      {...defaultProps}
    /> :
    <input
      type={PRIMITIVE_TYPE[type] || type}
      {...defaultProps}
      {...additionalProps}
    />
}

export default Input;