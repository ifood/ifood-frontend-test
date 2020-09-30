import styled from "styled-components";
import media from "styled-media-query";

import * as C from "constants/styles/colors";
import * as T from "constants/styles/typography";

export const Login = styled.div`
  background: ${C.PRIMARY_COLOR_DARK} url("/banner__login.png") bottom
    right/contain no-repeat;

  ${media.lessThan("large")`
    background-size: 50%;
  `}
`;

export const LoginSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;

  ${media.lessThan("large")`
    justify-content: center;
  `}
`;

export const LoginContent = styled.div`
  max-width: 490px;

  ${media.lessThan("large")`
    text-align: center;
    max-width: 400px;
  `}
`;

export const LoginTitle = styled.h1`
  color: ${C.LIGHT};
  ${T.TITLE_EXTRALARGE};

  ${media.lessThan("large")`
    ${T.TITLE_LARGE};
  `}
`;

export const LoginTitleDetail = styled.span`
  font-weight: bold;
`;

export const LoginDescription = styled.p`
  line-height: 35px;
  color: ${C.LIGHT};
  ${T.TITLE_MEDIUM};

  ${media.lessThan("large")`
    ${T.BODY_TEXT};
  `}
`;
