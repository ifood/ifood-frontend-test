import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Spacer = ({ sizes }) => {
  return <S.Spacer sizes={sizes} />;
};

const spacingOptions = ["xxl", "xl", "lg", "md", "sm", "xs"];

Spacer.propTypes = {
  sizes: PropTypes.shape({
    desktop: PropTypes.oneOf(spacingOptions),
    mobile: PropTypes.oneOf(spacingOptions),
  }),
};

export default Spacer;
