import React from "react";
import Button from "components/Button";
import Wrapper from "components/Wrapper";
import Spacer from "components/Spacer";

import { SPOTIFY_LOGIN_URL } from "constants/config";

import parser from "html-react-parser";

import { loginData } from "constants/data/pages/login";

import * as S from "./styled";

const Login = () => {
  const redirectToLogin = () => {
    window.location = SPOTIFY_LOGIN_URL;
    return true;
  };

  return (
    <S.Login>
      <Wrapper>
        <S.LoginSection>
          <S.LoginContent>
            <S.LoginTitle>{parser(loginData.title)}</S.LoginTitle>

            <Spacer sizes={{ desktop: "md" }} />

            <S.LoginDescription>{loginData.description}</S.LoginDescription>

            <Spacer sizes={{ desktop: "xl" }} />

            <Button
              label={loginData.ctaLabel}
              onClick={() => redirectToLogin()}
            />
          </S.LoginContent>
        </S.LoginSection>
      </Wrapper>
    </S.Login>
  );
};

export default Login;
