import React from "react";
import Button from "components/presentational/Button";
import Wrapper from "components/presentational/Wrapper";
import Spacer from "components/presentational/Spacer";

import * as S from "./styled";

const Login = () => {
  const test = () => {
    console.log("oi");
  };

  return (
    <S.Login>
      <Wrapper>
        <S.LoginSection>
          <S.LoginContent>
            <S.LoginTitle>
              Where music meets <S.LoginTitleDetail>iFood</S.LoginTitleDetail>
            </S.LoginTitle>

            <Spacer sizes={{ desktop: "md" }} />
            <S.LoginDescription>
              Discover new songs from our featured playlists while your order is
              on the way
            </S.LoginDescription>

            <Spacer sizes={{ desktop: "xl" }} />

            <Button label="start now" onClick={() => test()} />
          </S.LoginContent>
        </S.LoginSection>
      </Wrapper>
    </S.Login>
  );
};

export default Login;
