import React from "react";
import { SearchIcon } from "../Icons";
import { Container, StyledInput } from "./styles";

const Input = (props) => {
  return (
    <Container>
      <StyledInput {...props} />
      <SearchIcon />
    </Container>
  );
};

export default Input;
