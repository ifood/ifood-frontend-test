import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: React.FC<IInput> = ({ name, label, ...rest }) => {
  return <S.Input id={name} {...rest} />;
};
