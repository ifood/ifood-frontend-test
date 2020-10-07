import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<IInput> = ({ id, onChange, ...rest }) => {
  return <S.Input id={id} onChange={onChange} {...rest} />;
};
