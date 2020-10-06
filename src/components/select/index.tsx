import React, { useState } from 'react';
import * as S from './styles';

export const Select = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState<string>('optionA');
  return (
    <S.Select
      value={selectValue}
      onBlur={(ev: React.ChangeEvent<HTMLSelectElement>): void => setSelectValue(ev.target.value)}
    >
      <option value="optionA">Option A</option>
      <option value="optionB">Option B</option>
      <option value="optionC">Option C</option>
    </S.Select>
  );
};
