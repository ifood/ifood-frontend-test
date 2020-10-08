import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from 'components/card';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Card>Card text</Card>);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  expect(screen.getByText(/Card text/)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
