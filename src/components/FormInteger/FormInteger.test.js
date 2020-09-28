import React from 'react';
import { render } from '@testing-library/react';
import FormInteger from '.';

test('renders input integer component with placeholder', () => {
  const { getByPlaceholderText } = render(
    <FormInteger
      id="input"
      placeholder="Input placeholder"
      onChange={(e) => e.target.value}
    />,
  );
  const inputElement = getByPlaceholderText(/Input placeholder/i);
  expect(inputElement).toBeInTheDocument();
});
