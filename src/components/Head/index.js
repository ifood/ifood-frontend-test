import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";

import Wrapper from "components/Wrapper";

import { headData } from "constants/data/components/Head";

import * as S from "./styled";

const Head = ({ title, tagline }) => {
  return (
    <S.Head>
      <Wrapper>
        <S.HeadContent>
          <S.HeadTitle>{title}</S.HeadTitle>
          <S.HeadTagline>{parser(tagline)}</S.HeadTagline>
        </S.HeadContent>
      </Wrapper>
    </S.Head>
  );
};

Head.defaultProps = {
  title: headData.title,
  tagline: headData.tagline,
};

Head.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default Head;
