import styled from "styled-components";
import media from "styled-media-query";

import * as C from "constants/styles/colors";
import * as T from "constants/styles/typography";
import { SPACINGS } from "constants/styles/spacings";

export const Filters = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 324px;
    z-index: -1;
    background: ${C.GREY_LIGHT};
  }
`;

export const FiltersTitle = styled.h2`
  color: ${C.GREY};
  text-align: center;
  padding: ${SPACINGS.xl} 0;
  ${T.TITLE_LARGE};

  ${media.lessThan("large")`
    ${T.TITLE_MEDIUM};
  `}
`;

export const FiltersBox = styled.div`
  box-shadow: 0px 2px 40px rgba(182, 175, 175, 0.35);
  padding: ${SPACINGS.xl};
  max-width: 845px;
  width: 90%;
  margin: 0 auto;
  background: ${C.LIGHT};
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;

  ${media.lessThan("large")`
    padding: ${SPACINGS.lg};
  `}
`;

export const FiltersItem = styled.div`
  width: 100%;

  :not(:last-child) {
    width: calc(50% - 14px);
    margin: 0 auto 28px;
  }

  :nth-child(even) {
    margin-left: 28px;
  }

  ${media.lessThan("large")`
    width: 100%
  `}
`;
