import { memo, ReactNode } from 'react'
import { StyledTitle } from './styles'

export interface TitleProps {
  children: ReactNode;
  color?: string;
}

const Title = StyledTitle

export default memo(Title)
