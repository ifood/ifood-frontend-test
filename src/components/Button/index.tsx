import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
}

const Button = ({ children, ...rest }: ButtonProps) => (
    <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
