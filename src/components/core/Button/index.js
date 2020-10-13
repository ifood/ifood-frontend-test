import React from "react";
import PropTypes from "prop-types";

import { Container, ButtonContent } from "./styles";

const Button = ({
  children,
  handleClick,
  url,
  margin,
  link,
  type,
  ...props
}) => (
  <Container margin={margin}>
    {link ? (
      <ButtonContent
        onClick={handleClick}
        as="a"
        href={url}
        type={type}
        {...props}
      >
        {children}
      </ButtonContent>
    ) : (
      <ButtonContent onClick={handleClick} as="button" type={type} {...props}>
        {children}
      </ButtonContent>
    )}
  </Container>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf(["primary", "secondary"]),
  ]),
  margin: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.bool,
};

Button.defaultProps = {
  handleClick: null,
  type: "primary",
  margin: "0",
  url: "",
  link: false,
};

export default Button;
