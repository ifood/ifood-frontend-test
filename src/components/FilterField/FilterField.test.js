import React from 'react';
import { render } from '@testing-library/react';
import FilterField from '.';

test('renders filter fild with custom label', () => {
  const field = {
    id: 'offset',
    name: 'Offset',
    validation: {
      min: 0,
      max: 100,
    },
  };

  const { getByLabelText } = render(
    <FilterField field={field} onChange={(value) => value} />,
  );
  const fieldElement = getByLabelText(field.name);
  expect(fieldElement).toBeInTheDocument();
});
