import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";

import * as S from "./styles";
import loading from "assets/loading/loading.json";

const Loading = ({ isLoading, children }) => {
  if (isLoading)
    return (
      <S.Container>
        <S.Svg>
          <Lottie
            options={{
              animationData: loading,
            }}
          />
        </S.Svg>
      </S.Container>
    );

  return children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.any,
};

Loading.defaultProps = {
  isLoading: false,
  children: null,
};

export default Loading;
