import React from 'react';

import { Container } from './styles';

const DateFilter: React.FC = () => {
  return (
    <Container
      id="datetime-local"
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
