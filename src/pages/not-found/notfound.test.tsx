import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from 'pages/not-found';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<NotFound />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders error link', () => {
  wrapper();
  const linkElement = screen.getByText(/Error/i);
  expect(linkElement).toBeInTheDocument();
});
