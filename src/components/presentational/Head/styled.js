import styled from "styled-components";
import media from "styled-media-query";

import * as T from "constants/styles/typography";
import * as C from "constants/styles/colors";
import { SPACINGS } from "constants/styles/spacings";

export const Head = styled.header`
  padding: ${SPACINGS.lg} 0;
  background-color: ${C.GREY_LIGHT};
`;

export const HeadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const HeadTitle = styled.h1`
  color: ${C.PRIMARY_COLOR};
  font-weight: 700;
  font-size: ${T.SIZES.lg};

  ${media.lessThan("large")`
    margin-bottom: ${SPACINGS.xs}
  `}
`;

export const HeadTagline = styled.p`
  color: ${C.GREY_DARK};
  font-size: ${T.SIZES.sm};

  span {
    color: ${C.PRIMARY_COLOR};
    font-weight: 700;
  }
`;
