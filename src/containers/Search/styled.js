import styled from "styled-components";
import media from "styled-media-query";

import * as C from "constants/styles/colors";
import * as T from "constants/styles/typography";
import { SPACINGS } from "constants/styles/spacings";

export const SearchWrapper = styled.div`
  background: ${C.GREY_LIGHT};
  padding: 0 0 ${SPACINGS.xl};
`;

export const SearchByName = styled.input`
  color: ${C.GREY};
  text-align: center;
  padding: ${SPACINGS.xl} 0 ${SPACINGS.md};
  background: transparent;
  margin: 0 auto;
  display: block;
  outline: none;
  font-family: ${T.PRIMARY_FONT};
  width: 80%;
  max-width: 450px;
  border-bottom: 1px solid grey;
  ${T.TITLE_LARGE};

  ${media.lessThan("large")`
    ${T.BODY_TEXT};
  `}
`;
