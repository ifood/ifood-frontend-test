import styled from "styled-components";

import * as C from "constants/styles/colors";
import * as T from "constants/styles/typography";
import { SPACINGS } from "constants/styles/spacings";

export const PlaylistCardLink = styled.span`
  color: ${C.PRIMARY_COLOR};
  margin: ${SPACINGS.xl} 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: ${T.SIZES.sm};
  padding: ${SPACINGS.sm} 0 ${SPACINGS.sm};
  border-bottom: 5px solid currentColor;
  display: block;
  transition: 300ms ease all;
`;

export const PlaylistCard = styled.a`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  position: relative;
  top: 0;
  transition: 300ms ease all;
  border: 1px solid ${C.GREY_LIGHTER};
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    top: -10px;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.15);

    ${PlaylistCardLink} {
      background-color: ${C.PRIMARY_COLOR_LIGHT};
      color: ${C.LIGHT};
      border-color: ${C.PRIMARY_COLOR_LIGHT};
    }
  }
`;

export const PlaylistCardImage = styled.div`
  img {
    display: block;
  }
`;

export const PlaylistCardContent = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  width: 100%;
`;

export const PlaylistCardInfo = styled.div`
  padding: ${SPACINGS.lg} ${SPACINGS.lg} 0;
`;

export const PlaylistCardAuthor = styled.p`
  color: ${C.GREY};
  ${T.BODY_TEXT}
`;

export const PlaylistCardAuthorDetail = styled.span`
  font-weight: bold;
`;

export const PlaylistCardTitle = styled.h2`
  color: ${C.GREY_DARK};
  margin: 0 auto ${SPACINGS.xs};
  ${T.TITLE_MEDIUM};
`;
