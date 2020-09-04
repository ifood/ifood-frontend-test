import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import { MaxWidth, Media } from '../LayoutConstants';

const StyledHeader = styled.header`
  background: #ea1d2c;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Content = styled.h1`
  width: 100%;
  padding: 0 20px;
  display: flex;
  @media (min-width: ${Media.SMALL}) {
    width: 80%;
    max-width: ${MaxWidth};
    padding: 0;
  }
`;

const Image = styled.img`
  width: 120px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Content>
        <Image src={Logo} alt="Spotifood logo" />
      </Content>
    </StyledHeader>
  );
}
