import React from 'react';
import { render, screen } from '@testing-library/react';
import { DateField } from 'components/date-field';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<DateField startDate={new Date()} onChangeDate={() => {}} />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  expect(container).toMatchSnapshot();
});
