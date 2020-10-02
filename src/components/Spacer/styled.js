import styled from "styled-components";
import media from "styled-media-query";

import { SPACINGS } from "constants/styles/spacings";

export const Spacer = styled.div`
  ${({ sizes }) =>
    sizes && sizes.desktop && `height: ${SPACINGS[sizes.desktop]}`};

  ${media.lessThan("large")`
    ${({ sizes }) =>
      sizes && sizes.mobile && `height: ${SPACINGS[sizes.mobile]}`}
  `};
`;
