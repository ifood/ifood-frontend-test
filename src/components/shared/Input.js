import React from 'react';

const PRIMITIVE_TYPE = {
  STRING: 'text',
  INTEGER: 'number',
};

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
  const additionalProps = validationProps(validation);
  return <input
    className="form-control"
    type={PRIMITIVE_TYPE[type] || type}
    name={name}
    onChange={handleInputChange}
    value={value}
    placeholder={placeholder}
    {...additionalProps}
  />
}

export default Input;