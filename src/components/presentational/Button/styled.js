import styled from "styled-components";

import * as C from "constants/styles/colors";
import { SPACINGS } from "constants/styles/spacings";

export const Button = styled.button`
  background-color: ${C.LIGHT};
  color: ${C.PRIMARY_COLOR};
  padding: ${SPACINGS.xs} ${SPACINGS.xl};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition: 300ms ease all;

  &:hover {
    background: ${C.PRIMARY_COLOR_LIGHT};
    color: ${C.LIGHT};
  }
`;
