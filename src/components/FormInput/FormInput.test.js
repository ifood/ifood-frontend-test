import React from 'react';
import { render } from '@testing-library/react';
import FormInput from '.';

test('renders input text component with placeholder', () => {
  const { getByPlaceholderText } = render(
    <FormInput
      id="input"
      placeholder="Input placeholder"
      onChange={(e) => e.target.value}
    />,
  );
  const inputElement = getByPlaceholderText(/Input placeholder/i);
  expect(inputElement).toBeInTheDocument();
});
