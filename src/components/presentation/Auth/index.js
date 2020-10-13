import React from "react";

import urls from "utils/constants/urls";

import { Wrapper, FlexCenter } from "components/core/Grid";
import { Title, Color, Paragraph } from "components/core/Typography";
import Button from "components/core/Button";

const Auth = () => {
  return (
    <Wrapper>
      <FlexCenter>
        <Title>
          Spoti<Color color="red">food</Color>
        </Title>

        <Paragraph margin="4rem 0" textAlign="center">
          Acesse a nossa aplicação e ouça suas músicas favoritas!
        </Paragraph>

        <Button href={urls.LINKS.authorization} link>
          Login
        </Button>
      </FlexCenter>
    </Wrapper>
  );
};

export default Auth;
