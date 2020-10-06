import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from 'pages/home';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Home />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders Home link', () => {
  wrapper();
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
