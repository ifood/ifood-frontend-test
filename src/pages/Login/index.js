import React from "react";
import Button from "components/presentational/Button";
import Wrapper from "components/presentational/Wrapper";
import Spacer from "components/presentational/Spacer";

import parser from "html-react-parser";

import { loginData } from "constants/data/pages/login";

import * as S from "./styled";

const Login = () => {
  const buttonFunction = () => {
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
              onClick={() => buttonFunction()}
            />
          </S.LoginContent>
        </S.LoginSection>
      </Wrapper>
    </S.Login>
  );
};

export default Login;
