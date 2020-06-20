import styled from 'styled-components'
import { TitleProps } from './Title'

export const StyledTitle = styled.div<TitleProps>`
  color: ${({ color = "#414143" }) => color};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1;
`