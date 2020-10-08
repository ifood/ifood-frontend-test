import React from 'react';
import { render } from '@testing-library/react';
import { Image } from 'components/image';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const wrapper = () => render(<Image src="image" alt="alt image" />);

test('testing accessibility', async () => {
  const { container } = wrapper();
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders component without errors', () => {
  const { container } = wrapper();

  expect(container).toMatchSnapshot();
});
