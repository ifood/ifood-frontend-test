import { memo, MouseEvent } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps {
  children: string;
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = StyledButton

export default memo(Button)
