import React from "react";
import { Background } from "../../assets/styles";
import {
  LoginButton,
  LoginButtonContainer,
  LoginContainer,
  LoginLogo,
  LoginLogoContainer,
  LoginToContinue,
  MessageBeforeLogin, SignupLink
} from "./styles";
import spotifood_logo_with_name
  from '../../assets/img/svg/spotifood_logo_with_name.svg';
import useSpotifyAccountUrl from "../../hooks/useSpotifyAccountUrl";
import { Link } from "../../assets/styles/Link";


const LoginPage: React.FC = () => {

  const spotifyAccountUrl = useSpotifyAccountUrl();

  const handleButtonLogin = (): void => {
    window.location.href = spotifyAccountUrl;
  }

  return (
    <Background>
      <LoginContainer>
        <LoginLogoContainer>
          <LoginLogo src={ spotifood_logo_with_name } alt="logo Site"/>
        </LoginLogoContainer>
        <LoginButtonContainer>
          <MessageBeforeLogin>Opa, sabemos que está com fome por musica, porém a
            partir daqui você deve realizar o login com sua conta do spotify.</MessageBeforeLogin>

          <LoginToContinue>Logue com sua conta do Spotify clicando no botão
            abaixo.</LoginToContinue>

          <LoginButton
            size="large"
            variant="contained"
            color="primary"
            onClick={ handleButtonLogin }
          >
            Clique aqui para logar.
          </LoginButton>
          <SignupLink href="https://www.spotify.com/br/signup/" target="_blank">
            Não possui conta no Spotify? Clique aqui e crie já a sua.
          </SignupLink>
        </LoginButtonContainer>
      </LoginContainer>
    </Background>
  );
}

export default LoginPage;
