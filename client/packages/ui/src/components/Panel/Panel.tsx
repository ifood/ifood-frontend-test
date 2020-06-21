import { memo, ReactNode } from 'react'
import { StyledPanel } from './styles'

export interface PanelProps {
  children: ReactNode | ReactNode[];
  height: string;
  width: string;
}

const Panel = StyledPanel

export default memo(Panel)
