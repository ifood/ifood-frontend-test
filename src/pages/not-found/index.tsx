import React from 'react';
import Oops from 'assets/images/oops.png';

import { Wrapper } from 'components/wrapper';
import { Image } from 'components/image';

export const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Image src={Oops} alt="Ops! Página não encontrada." width="200" />
      <h1>Página não encontrada</h1>
    </Wrapper>
  );
};
