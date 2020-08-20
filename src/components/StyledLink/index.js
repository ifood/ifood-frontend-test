/* istanbul ignore file */

/**
 *
 * StyledLink
 *
 */

import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkStyle = css`
  text-decoration: none;
  display: inline-block;
  outline: none;

  background: ${(props) => props.theme.red};
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
    background: ${(props) => props.theme.disabledColor};
    cursor: not-allowed;
  }
`

const StyledLink = styled.a`
  ${LinkStyle}
`

export const StyledRouterLink = styled(Link)`
  ${LinkStyle}
`

export default StyledLink
