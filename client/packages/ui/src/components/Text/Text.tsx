import { memo, ReactNode } from 'react'
import { StyledText } from './styles'

export interface TextProps {
  children: ReactNode;
  color?: string;
}

const Text = StyledText

export default memo(Text)
