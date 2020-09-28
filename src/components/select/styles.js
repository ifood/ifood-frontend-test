import styled from 'styled-components'

import { colors } from 'styles'

export const Container = styled.div`
  cursor: pointer;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`

export const Title = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 22px;
  letter-spacing: 1.11px;
  font-weight: 300;
`

export const Dropdown = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1px 0 0;
  margin: 0;
  width: 50%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: ${colors.grayLight};

  &:hover {
    color: ${colors.white};
  }
`

export const Option = styled.option`
  font-size: 13px;
  line-height: 32px;
  color: ${colors.black};
`
