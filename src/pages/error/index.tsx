import React from 'react'; //eslint-disable-line
import Oops from 'assets/images/oops.png';

import { Wrapper } from 'components/wrapper';
import { Image } from 'components/image';

import * as S from './styles';

export const Error: React.FC = () => {
  return (
    <Wrapper>
      <Image src={Oops} alt="Ops! Algo de errado aconteceu." width="200" />
      <h1>Algo de errado aconteceu. </h1>
      <S.H3>Por favor, tente novamente mais tarde.</S.H3>
    </Wrapper>
  );
};
