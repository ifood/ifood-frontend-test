import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from 'components/button';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Button>Text button</Button>);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  expect(screen.getByText(/Text button/)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
