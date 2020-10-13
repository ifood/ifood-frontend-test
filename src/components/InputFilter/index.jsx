import React from 'react';

import * as S from './styles';

const InputFilter = ({
  min,
  max,
  placeholder,
  type,
}) => {
  switch (type) {
    case 'DATE_TIME':
      type = 'date';
      break;
    case 'INTEGER':
      type = 'number';
      break;
    default:
      type = 'text';
      break;
  };

  return (
    <S.Input
      min={min}
      max={max}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputFilter;
