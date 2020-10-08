import React from 'react';
import { render } from '@testing-library/react';
import { Input } from 'components/input';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Input id="input-id" value="value" onChange={() => {}} />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  expect(container).toMatchSnapshot();
});

test('renders component with type number and no validation', () => {
  const { container } = render(<Input id="input-id" type="number" value="value" onChange={() => {}} />);

  expect(container).toMatchSnapshot();
});

test('renders component with type number and with validation', () => {
  const validation = {
    min: '1',
    max: '50'
  };
  const { container } = render(
    <Input id="input-id" type="number" value="value" onChange={() => {}} validation={validation} />
  );

  expect(container).toMatchSnapshot();
});
