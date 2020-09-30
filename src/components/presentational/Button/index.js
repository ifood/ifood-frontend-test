import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Button = ({ onClick, label }) => {
  return <S.Button onClick={onClick}>{label}</S.Button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
