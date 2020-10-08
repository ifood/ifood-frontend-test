import React, { ButtonHTMLAttributes } from 'react'; //eslint-disable-line

import * as S from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};
