import styled from 'styled-components'

import { colors } from 'styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  margin-top: 25px;
  input {
    cursor: pointer;
    border: none;
    width: 100%;
    color: ${colors.white};
    background: transparent;
    font-size: 13px;
    line-height: 32px;
    color: ${colors.grayLight};
    &:hover {
      color: ${colors.white};
    }
  }
`

export const Title = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 1.11px;
  font-weight: 300;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const RemoveIcon = styled.img`
  width: 15px;
  cursor: pointer;
`
