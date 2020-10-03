import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Wrapper = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

Wrapper.defaultProps = {
  children: null,
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
