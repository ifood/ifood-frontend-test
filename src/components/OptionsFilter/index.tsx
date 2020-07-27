import React from 'react';

import { Container, ValueField, Checkbox } from './styles';

interface ValuesInterface {
  values: Array<{
    name: string;
    value: string;
  }>;
}

const OptionsFilter: React.FC<ValuesInterface> = ({ values }) => {
  return (
    <Container>
      {values.map(item => (
        <ValueField key={item.value}>
          <Checkbox
            id={item.value}
            name={item.value}
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
          />
          <label htmlFor={item.value}>{item.name}</label>
        </ValueField>
      ))}
    </Container>
  );
};

export default OptionsFilter;
