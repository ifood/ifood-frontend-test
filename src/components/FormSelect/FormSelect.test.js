import React from 'react';
import { render } from '@testing-library/react';
import FormSelect from '.';

test('renders select component with placeholder', () => {
  const options = [{ id: 'TE', label: 'Test' }];

  const { getByText } = render(
    <FormSelect
      id="select"
      options={options}
      value="TE"
      placeholder="Select placeholder"
      onChange={(value) => value}
    />,
  );
  const inputElement = getByText(/Select placeholder/i);
  expect(inputElement).toBeInTheDocument();
});
