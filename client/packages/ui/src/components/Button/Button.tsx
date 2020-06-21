import { memo, MouseEvent, ReactElement } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps {
  title?: string;
  children: string;
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonType = (props: ButtonProps) => ReactElement

const Button = StyledButton

export default memo(Button) as ButtonType
