import React from 'react';

const PRIMITIVE_TYPE = {
  STRING: 'text',
  INTEGER: 'number',
};

const Input = ({
  name = '',
  type = 'text',
  validation = {},
  onChange = () => {},
  value = ''
}) => {
  return <input
    className="form-control"
    type={PRIMITIVE_TYPE[type] || type}
    name={name}
    onChange={onChange}
    value={value}
  />
}

export default Input;