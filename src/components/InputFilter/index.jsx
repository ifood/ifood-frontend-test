import React from 'react';

import * as S from './styles';

const InputFilter = ({
  min,
  max,
  onChange,
  placeholder,
  type,
}) => {
  switch (type) {
    case 'INTEGER':
      type = 'number';
      break;
    default:
      type = 'date';
      break;
  };

  return (
    <S.Input
      min={min}
      max={max}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputFilter;
