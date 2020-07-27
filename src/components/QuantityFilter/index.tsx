import React from 'react';

import { Container } from './styles';

const QuantityFilter: React.FC = () => {
  return (
    <Container
      defaultValue={25}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={5}
      marks
      min={0}
      max={50}
    />
  );
};

export default QuantityFilter;
