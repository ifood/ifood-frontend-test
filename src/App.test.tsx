import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<App />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders spotifood link', () => {
  wrapper();
  const linkElement = screen.getByText(/spotifood/i);
  expect(linkElement).toBeInTheDocument();
});
