import styled from 'styled-components'

import { colors } from 'styles'

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;
  color: ${colors.grayLight};

  &:first-child {
    margin: 0;
  }
`

export const Item = styled.li`
  display: flex;
  align-items: center;

  font-size: 13px;
  line-height: 32px;

  cursor: pointer;

  &:hover {
    color: #fff;
  }
`

export const Title = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 1.11px;
  font-weight: 300;
`
