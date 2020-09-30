import { css } from "styled-components";

/**
 * FONTS
 */
export const PRIMARY_FONT = "'Inter', sans-serif";

/**
 * SIZES
 */

export const SIZES = {
  xl: "80px",
  lg: "32px",
  md: "22px",
  sm: "18px",
};

/**
 * TITLES
 */

export const TITLE_EXTRALARGE = css`
  & {
    font-size: ${SIZES.xl};
    font-weight: 400;
  }
`;

export const TITLE_LARGE = css`
  & {
    font-size: ${SIZES.lg};
    font-weight: 400;
  }
`;

export const TITLE_MEDIUM = css`
  & {
    font-size: ${SIZES.md};
    font-weight: 400;
  }
`;

export const BODY_TEXT = css`
  & {
    font-size: ${SIZES.sm};
    font-weight: 400;
  }
`;
