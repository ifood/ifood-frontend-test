import React from 'react';
import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';
import QueryString from 'query-string';
import { CenteredFlex } from '../../component/containers/Containers';
import { SCREEN, SPOTIFY_PARAMS } from '../../Constants';
import generateRandomString from '../../utils/GenerateRandomString';
import { setToken } from '../../utils/TokenController';
import spotifyLogo from '../../images/spotifood.png';

const Image = styled.img`
  zoom: 0.5;

  @media (max-width: ${SCREEN.MEDIUM}) {
    zoom: 0.3;
  }

  @media (max-width: ${SCREEN.SMALL}) {
    zoom: 0.2;
  }
`;
const BlackCenteredFlex = styled(CenteredFlex)`
  background-color: #0f0f0f;
`;
const BottomSpaced = styled.div`
  padding-bottom: 16px;
`;

function Login() {
  function handleLogin() {
    const { SPOTIFY_AUTH_RESOURCE, ...params } = SPOTIFY_PARAMS;

    const randomString = generateRandomString(16);
    const search = QueryString.stringify({ ...params, state: randomString });

    setToken(randomString);

    window.location.href = `${SPOTIFY_AUTH_RESOURCE}?${search}`;
  }

  return (
    <>
      <BlackCenteredFlex>
        <Image src={spotifyLogo} />
        <BottomSpaced>
          <Typography
            align="center"
            color="textSecondary"
            variant="h5"
            gutterBottom>
            Listen to comfy music while eating ♪
          </Typography>
        </BottomSpaced>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login with Spotify
        </Button>
      </BlackCenteredFlex>
    </>
  );
}

export default Login;
