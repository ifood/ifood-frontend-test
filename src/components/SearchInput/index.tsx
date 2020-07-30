import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps {
  name: string;
}

const SearchInput: React.FC<InputProps> = ({ name }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      name={name}
      fullWidth
      inputRef={inputRef}
      placeholder="Buscar por nome"
    />
  );
};

export default SearchInput;
