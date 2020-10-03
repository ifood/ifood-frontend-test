import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Field = ({ placeholder, as, children, type }) => (
  <S.Field as={as} placeholder={placeholder} type={type}>
    {children && children}
  </S.Field>
);

Field.defaultProps = {
  placeholder: null,
  children: null,
  as: null,
  type: "text",
};

Field.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.string,
  type: PropTypes.string,
};

export default Field;
