import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from 'pages/error';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Error />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders error component', () => {
  wrapper();
  const element = screen.getByText(/Algo de errado aconteceu./i);
  expect(element).toBeInTheDocument();
});
