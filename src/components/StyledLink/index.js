/* istanbul ignore file */

/**
 *
 * StyledLink
 *
 */

import styled, { css } from 'styled-components'

export const LinkStyle = css`
  text-decoration: none;
  display: inline-block;
  outline: none;

  background: #ea1d2c;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 12px;
  border-radius: 12px;
  min-width: 120px;
  max-width: 320px;
  transition: ease 0.1s;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    background: #a3a3a3;
    cursor: not-allowed;
  }
`

const StyledLink = styled.a`
  ${LinkStyle}
`

export default StyledLink
