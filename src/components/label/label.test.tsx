import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from 'components/label';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Label name="labelName">Label text</Label>);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  expect(screen.getByText(/Label text/)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
