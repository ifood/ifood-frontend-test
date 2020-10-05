import React from 'react';
import { render } from '@testing-library/react';

import Playlists from './Playlists';

describe('Playlists', () => {
  test('Simple render', () => {
    const { container } = render(<Playlists />);
    expect(container.querySelector('.playlists')).toBeInTheDocument();
  });
});
