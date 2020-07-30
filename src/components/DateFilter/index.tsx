import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

const DateFilter: React.FC = () => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField('timestamp');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      inputRef={inputRef}
      type="datetime-local"
      defaultValue="2017-05-24T10:30"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DateFilter;
