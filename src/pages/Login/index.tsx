import React from "react";
import { Background } from "../../assets/styles";
import {
  LoginButtonContainer,
  LoginContainer,
  LoginLogo,
  LoginLogoContainer, LoginToContinue, MessageBeforeLogin
} from "./styles";
import spotifood_logo_with_name
  from '../../assets/img/svg/spotifood_logo_with_name.svg';


const LoginPage: React.FC = () => {
  return (
    <Background>
      <LoginContainer>
        <LoginLogoContainer>
          <LoginLogo src={ spotifood_logo_with_name } alt="logo Site"/>
        </LoginLogoContainer>
        <LoginButtonContainer>
          <MessageBeforeLogin>Opa, sabemos que está com fome por musica, porém a
            partir daqui você deve realizar seu login.</MessageBeforeLogin>

          <LoginToContinue>Logue com sua conta do Spotify Clicando no botão abaixo.</LoginToContinue>
        </LoginButtonContainer>
      </LoginContainer>
    </Background>
  );
}

export default LoginPage;
