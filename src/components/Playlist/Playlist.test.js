import React from 'react';
import { render } from '@testing-library/react';
import Playlist from '.';

test('renders playlist item', () => {
  const playlist = {
    images: [],
    name: 'Playlist item',
    owner: {
      display_name: 'Playlist owner',
    },
  };

  const { getByText } = render(<Playlist data={playlist} />);
  const textElement = getByText(/Playlist item/i);
  expect(textElement).toBeInTheDocument();
});
