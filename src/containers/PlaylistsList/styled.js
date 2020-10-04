import styled from "styled-components";
import media from "styled-media-query";
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
