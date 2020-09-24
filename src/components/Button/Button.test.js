import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

test('renders button component', () => {
  const { getByText } = render(<Button value="Button component" />);
  const textElement = getByText(/Button component/i);
  expect(textElement).toBeInTheDocument();
});
