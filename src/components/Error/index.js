import React from "react";

import { Container, Title, Text, ErrorMessage } from "./styles";

const Error = ({ message }) => {
  return (
    <Container>
      <div>
        <Title>Sorry :(</Title>
        <Text>
          Looks like something went wrong:{" "}
          <ErrorMessage>{message}</ErrorMessage>
        </Text>
      </div>
    </Container>
  );
};

export default Error;
