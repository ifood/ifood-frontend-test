import React from 'react';
import InputMask from 'react-input-mask';
import { charFormatMap, typeMap } from '../../helpers/maps'

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

  return validation.pattern ?
    <InputMask
      type="text"
      mask={validation.pattern}
      formatChars={charFormatMap[validation.entityType]}
      {...defaultProps}
    /> :
    <input
      type={typeMap[type] || type}
      {...defaultProps}
      {...additionalProps}
    />
}

export default Input;