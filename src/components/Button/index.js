import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Button = ({ onClick, label, variation }) => {
  return (
    <S.Button variation={variation} onClick={onClick}>
      {label}
    </S.Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variation: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};

export default Button;
