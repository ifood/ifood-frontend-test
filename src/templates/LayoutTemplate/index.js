import React from 'react';

import { Main, Logo } from './styles';

const LayoutTemplate = ({ children }) => (
  <Main>
    <Logo width="80px" src="/icon-192x192.png" alt="Spotifood" />
    {children}
  </Main>
);

export default LayoutTemplate;
