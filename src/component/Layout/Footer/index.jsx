import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import LogoIcon from '../images/logo-icon.png';
import { MaxWidth, Media } from '../LayoutConstants';

const StyledFooter = styled.footer`
  background: #151515;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 20px;
`;

const Content = styled.div`
  width: 100%;
  max-width: ${MaxWidth};
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${Media.MEDIUM}) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 50px;
`;

const InfoText = styled.div`
  @media (min-width: ${Media.MEDIUM}) {
    padding: 0 20px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Content>
        <Logo>
          <Image src={LogoIcon} alt="Spotifood logo" />
        </Logo>
        <InfoText>
          <p>
            <FormattedMessage id="disclaimer" />
          </p>
          <p>
            <FormattedMessage id="disclaimer.data" />
          </p>
        </InfoText>
      </Content>
    </StyledFooter>
  );
}
