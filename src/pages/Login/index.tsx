import React from "react";
import { Background } from "../../assets/styles";
import {
  LoginButton,
  LoginButtonContainer,
  LoginContainer,
  LoginLogo,
  LoginLogoContainer,
  LoginToContinue,
  MessageBeforeLogin,
  SignupLink
} from "./styles";
import spotifood_logo_with_name
  from '../../assets/img/svg/spotifood_logo_with_name.svg';
import useSpotifyAccountUrl from "../../hooks/useSpotifyAccountUrl";
import config from "../../config";


const LoginPage: React.FC = () => {

  const spotifyAccountUrl = useSpotifyAccountUrl();
  const { spotifySignupAccountUrl } = config;

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
          <MessageBeforeLogin>Hello, we know you are hungry for music, but from
            here you must login with your spotify account.</MessageBeforeLogin>

          <LoginToContinue>Click on the link below to login.</LoginToContinue>

          <LoginButton
            size="large"
            variant="contained"
            color="primary"
            onClick={ handleButtonLogin }
          >
            Click here to sign in
          </LoginButton>
          <SignupLink href={ spotifySignupAccountUrl } target="_blank">
            Don't have a Spotify account? Click here and sign up now
          </SignupLink>
        </LoginButtonContainer>
      </LoginContainer>
    </Background>
  );
}

export default LoginPage;
