import React from 'react';

import { Wrapper } from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <h2>Spotifood</h2>
      <span>© Made by Zuganov {new Date().getFullYear()}</span>
    </Wrapper>
  );
};

export default Footer;
