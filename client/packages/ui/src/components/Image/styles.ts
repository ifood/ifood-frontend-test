import styled from 'styled-components'
import { ImageProps } from './Image'

export const StyledImage = styled.img<ImageProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
`