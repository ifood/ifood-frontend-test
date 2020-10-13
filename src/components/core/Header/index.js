import React from "react";
import PropTypes from "prop-types";

import { Color } from "components/core/Typography";
import * as S from "./styles";

const Header = ({ userName }) => (
  <S.Header>
    <S.Title>
      Spoti<Color color="red">food</Color>
    </S.Title>
    <S.Span>Ola, {userName}.</S.Span>
  </S.Header>
);

Header.propTypes = {
  userName: PropTypes.string,
};

Header.defaultProps = {
  userName: "",
};

export default Header;
