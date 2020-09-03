import React from "react";
import PropTypes from "prop-types";

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

Error.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};

export default Error;
