import React from 'react';

import * as S from './styles';

interface ICard {
  children: React.ReactNode;
}

export const Card: React.FC<ICard> = ({ children }) => {
  return <S.Card>{children} </S.Card>;
};
