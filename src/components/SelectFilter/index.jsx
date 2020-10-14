import React from 'react';
import * as S from './styles';

const SelectFilter = ({
  id,
  optValues,
  onChange,
}) => {
  return (
    <S.Select id={id} onChange={onChange}>
      <option required>-- Selecione uma opção</option>
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