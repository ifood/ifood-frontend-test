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

export const FilterByName = styled.input`
  color: ${C.GREY};
  text-align: center;
  padding: ${SPACINGS.xl} 0 ${SPACINGS.md};
  background: transparent;
  margin: 0 auto ${SPACINGS.xl};
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
  justify-content: space-between;

  ${media.lessThan("large")`
    padding: ${SPACINGS.lg};
  `}
`;

export const FiltersItem = styled.div`
  width: 100%;

  &:not(:last-child) {
    width: calc(50% - 14px);
    margin: 0 0 28px;
  }

  ${media.lessThan("large")`
    &:not(:last-child) {
      width: 100%;
    }
  `}
`;

export const FiltersValidation = styled.p`
  color: ${C.PRIMARY_COLOR};
  text-align: center;
  margin: 0 auto ${SPACINGS.lg};
`;
