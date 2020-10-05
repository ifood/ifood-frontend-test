import styled, { css } from "styled-components";

import * as C from "constants/styles/colors";
import { SPACINGS } from "constants/styles/spacings";

const buttonPrimary = css`
  background-color: ${C.LIGHT};
  color: ${C.PRIMARY_COLOR};

  &:hover {
    background: ${C.PRIMARY_COLOR_LIGHT};
    color: ${C.LIGHT};
  }
`;

const buttonSecondary = css`
  background-color: ${C.PRIMARY_COLOR_LIGHT};
  color: ${C.LIGHT};

  &:hover {
    background: ${C.PRIMARY_COLOR_DARK};
  }
`;

export const Button = styled.button`
  padding: ${SPACINGS.xs} ${SPACINGS.xl};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition: 300ms ease all;

  ${({ variation }) => variation === "primary" && buttonPrimary};
  ${({ variation }) => variation === "secondary" && buttonSecondary};
`;
