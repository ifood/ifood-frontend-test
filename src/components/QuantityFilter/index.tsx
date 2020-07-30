import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

const QuantityFilter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField } = useField('quantity');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      ref={inputRef}
      defaultValue={25}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={5}
      marks
      min={0}
      max={50}
      onChange={(_, value) => {
        if (inputRef.current) {
          inputRef.current.value = String(value);
        }
      }}
    />
  );
};

export default QuantityFilter;
