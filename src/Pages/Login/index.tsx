import React from "react";
import { FaSpotify } from "react-icons/fa";

import { Container, Content, Logo, Title, Button } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <FaSpotify size={70} />
        </Logo>
        <Title>Acesse para encontrar as melhores playlists</Title>
      <Button>
        <FaSpotify size={20} /> Conectar com Spotify
      </Button>
      </Content>
    </Container>
  );
};

export default Login;
