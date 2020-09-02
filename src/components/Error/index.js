import React from "react";

import { Container, Title, Text, ErrorMessage } from "./styles";

const Error = ({ message, color }) => {
  return (
    <Container role="alert" aria-live="assertive">
      <div>
        <Title aria-label="Desculpe. icone com carinha triste">
          Desculpe :(
        </Title>
        <Text>
          Encontramos um erro <br />
          <ErrorMessage color={color}>{message}</ErrorMessage>
        </Text>
      </div>
    </Container>
  );
};

export default Error;
