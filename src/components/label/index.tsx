import React, { LabelHTMLAttributes } from 'react';
import * as S from './styles';

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  children: React.ReactNode;
}

export const Label: React.FC<ILabel> = ({ name, children, ...rest }) => {
  return (
    <S.Label htmlFor={name} {...rest}>
      {children}
    </S.Label>
  );
};
