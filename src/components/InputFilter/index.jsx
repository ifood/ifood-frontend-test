import React from 'react';
import * as S from './styles';

const InputFilter = ({
  min,
  max,
  onChange,
  placeholder,
  type,
  id,
}) => {
  switch (type) {
    case 'INTEGER':
      type = 'number';
      break;
    default:
      type = 'datetime-local';
      break;
  };

  return (
    <S.Input
      id={id}
      min={min}
      max={max}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      step="1"
    />
  );
};

export default InputFilter;
