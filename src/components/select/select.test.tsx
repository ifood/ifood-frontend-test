import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from 'components/select';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const options = [
  { name: 'optionA', value: 'a' },
  { name: 'optionB', value: 'b' },
  { name: 'optionC', value: 'c' }
];
const wrapper = () =>
  render(
    <Select value="defaultValue" options={options} onChange={() => {}}>
      Label text
    </Select>
  );

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'a' }
  });

  expect(screen.getByText(/optionA/)).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
