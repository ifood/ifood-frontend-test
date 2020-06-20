import styled from 'styled-components'
import { TextProps } from './Text'

export const StyledText = styled.div<TextProps>`
  color: ${({ color = "#717171" }) => color};
  font-size: 12px;
  font-weight: 300;
  line-height: 1rem;
`