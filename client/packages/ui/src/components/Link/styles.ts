import styled from 'styled-components'
import { LinkProps } from './Link'

enum DefaultPalette {
  primary = "#717171",
  secondary = "#444"
}

export const StyledLink = styled.a<LinkProps>`
  color: ${({ palette = DefaultPalette }) => palette.secondary};
  font-size: 12px;
  font-weight: 300;
  line-height: 1rem;
  cursor: pointer;

  &:hover {
    color: ${({ palette = DefaultPalette }) => palette.primary}
  }
`