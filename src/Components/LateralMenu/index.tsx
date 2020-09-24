import React from "react";

import logo from '../../assets/icon.svg';
import { Container, Header, LogoImg, Title} from "./styles";

const LateralMenu: React.FC = () => {

  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="logo Spotify" />
        <Title> SpotIfood </Title>
      </Header>
    </Container>
  );
};

export default LateralMenu;