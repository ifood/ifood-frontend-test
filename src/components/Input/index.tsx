import React, { InputHTMLAttributes } from 'react';
import { StyledInputGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = ({ label, ...props }: InputProps) => (
    <StyledInputGroup>
        <label htmlFor={props.id}>
            {label}
            {props.required ? '*' : ''}
        </label>
        <input {...props} />
    </StyledInputGroup>
);

export default Input;
