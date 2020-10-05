import styled from "styled-components";
import media from "styled-media-query";

import * as C from "constants/styles/colors";
import { SPACINGS } from "constants/styles/spacings";

export const PlaylistsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin: ${SPACINGS.xl} 0;
  justify-items: center;

  ${media.lessThan("large")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    justify-items: center;
  `}
`;

export const PlaylistsListValidations = styled.div`
  margin: ${SPACINGS.lg} 0;
  text-align: center;
  color: ${C.PRIMARY_COLOR};
`;

export const PlaylistsListLink = styled.div`
  a {
    font-weight: bold;
    color: ${C.PRIMARY_COLOR};
    border-bottom: 2px solid currentColor;
    padding-bottom: ${SPACINGS.xs};
    transition: 300ms ease all;

    &:hover {
      color: ${C.PRIMARY_COLOR_LIGHT};
    }
  }
`;
