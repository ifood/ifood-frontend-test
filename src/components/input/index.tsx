import React, { useState } from 'react';
import * as S from './styles';

export const Input = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <S.Input
      type="text"
      value={inputValue}
      onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setInputValue(ev.target.value)}
    />
  );
};
