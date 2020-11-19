import React, { InputHTMLAttributes } from 'react';
import { StyledInputGroup } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: any[];
}

const Select = ({ label, options, ...props }: InputProps) => (
  <StyledInputGroup>
    <label htmlFor={props.id}>
      {label}
      {props.required ? '*' : ''}
    </label>
    <select {...props}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  </StyledInputGroup>
);

export default Select;
