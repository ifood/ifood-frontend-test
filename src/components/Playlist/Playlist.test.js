import React from 'react';
import { render } from '@testing-library/react';
import Playlist from '.';

test('renders playlist item', () => {
  const { getByText } = render(<Playlist />);
  const textElement = getByText(/Playlist item/i);
  expect(textElement).toBeInTheDocument();
});
