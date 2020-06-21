import styled from 'styled-components'
import { PanelProps } from './Panel'

export const StyledPanel = styled.div<PanelProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: 12px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  text-decoration: none;
`