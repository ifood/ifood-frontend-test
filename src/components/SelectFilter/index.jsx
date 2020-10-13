import React from 'react';
import * as S from './styles';

const SelectFilter = ({
  defaultValue,
  optValues,
  onChange,
s}) => {
  return (
    <S.Select onChange={onChange}>
      <option>{defaultValue = '-- Selecione uma opção'} </option>
      {optValues
        && optValues.map((opt, key) => (
          <option
            key={key}
            value={opt.value}
          >
            {opt.name}
          </option>
        ))}
    </S.Select>
  );
};

export default SelectFilter;