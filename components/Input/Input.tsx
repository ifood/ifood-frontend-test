import React, { useState } from 'react';

import { Container } from './styles';

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  onChange: (filterName: string, value: string) => any;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
    onChange(id, value);
  };

  return (
    <Container>
      <label>{label}:</label>
      <input
        id={id}
        type="text"
        name={name}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Input;
