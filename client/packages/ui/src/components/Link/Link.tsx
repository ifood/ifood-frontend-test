import { memo, ReactNode } from 'react'
import { StyledLink } from './styles'

export interface LinkProps {
  children: ReactNode;
  palette?: {
    primary: string;
    secondary: string;
  };
}

const Link = StyledLink

export default memo(Link)
