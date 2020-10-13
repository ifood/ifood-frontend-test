import React from 'react';
import * as S from './styles';

const SelectFilter = ({
  optValues,
}) => {
  return (
    <S.Select>
      <option>-- Selecione uma opção --</option>
      {optValues
        && optValues.map(opt => (
          <option value={opt.value}>{opt.name}</option>
        ))}
    </S.Select>
  );
};

export default SelectFilter;