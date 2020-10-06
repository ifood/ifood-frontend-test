import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders spotifood link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/spotifood/i);
  expect(linkElement).toBeInTheDocument();
});
