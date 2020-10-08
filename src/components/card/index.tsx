import React from 'react'; //eslint-disable-line

import * as S from './styles';

interface ICard {
  children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>;
};
