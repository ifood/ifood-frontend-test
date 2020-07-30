import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, ValueField, Checkbox } from './styles';

interface ValuesInterface {
  name: string;
  values: Array<{
    name: string;
    value: string;
  }>;
}

const OptionsFilter: React.FC<ValuesInterface> = ({ name, values }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      setValue: (refs: HTMLInputElement[], inputValues: string[]) => {
        refs.forEach(ref => {
          if (inputValues.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {values.map((item, index) => (
        <ValueField key={item.value}>
          <Checkbox
            inputRef={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            id={item.value}
            name={fieldName}
            value={item.value}
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
          />
          <label htmlFor={item.value}>{item.name}</label>
        </ValueField>
      ))}
    </Container>
  );
};

export default OptionsFilter;
