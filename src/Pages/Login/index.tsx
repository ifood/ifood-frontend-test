import React from "react";
import { FaSpotify } from "react-icons/fa";
import configApi from "../../Services/API/configApi";

import { Container, Content, Logo, Title, Button } from "./styles";

const Login: React.FC = () => {

  const { clientId } = configApi;

  const handleLogin = () => {
    const { origin, pathname } = window.location;
    const redirectUri = `${origin}${pathname}`;
    const queryString = `client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
    window.location.href = `https://accounts.spotify.com/authorize?${queryString}`;

  };

  return (
    <Container>
      <Content>
        <Logo>
          <FaSpotify size={70} />
        </Logo>
        <Title>Acesse para encontrar as melhores playlists</Title>
      <Button onClick={handleLogin}>
        <FaSpotify size={20} /> Conectar com Spotify
      </Button>
      </Content>
    </Container>
  );
};

export default Login;
