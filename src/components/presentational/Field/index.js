import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Field = ({ placeholder, as, children }) => {
  return (
    <S.Field as={as} placeholder={placeholder}>
      {children && children}
    </S.Field>
  );
};

Field.defaultProps = {
  placeholder: null,
  children: null,
  as: null,
};

Field.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.string,
};

export default Field;
