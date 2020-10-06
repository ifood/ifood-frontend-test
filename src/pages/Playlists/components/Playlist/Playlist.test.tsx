import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import Playlist from './Playlist';

const initialData = {
  imageUrl: 'https://via.placeholder.com/350x150',
  name: 'playlist test',
  spotify: 'https://open.spotify.com/playlist/1Bkv60CWboSUKZXbkgLG7M?si=F3ZHOfqyRB6RW7E3CNA7ng',
  description: 'my playlist'
}

describe('Playlist', () => {
  test('Simple render', () => {
    const { container } = render(<Playlist {...initialData} />);
    expect(container.querySelector('.playlist')).toBeInTheDocument();

    expect(container.querySelector('.playlist-title')?.textContent).toBe('playlist test');
    expect(container.querySelector('.playlist-description')?.textContent).toBe('my playlist');
    expect(container.querySelector('.playlist-image')).toHaveAttribute('src', 'https://via.placeholder.com/350x150');
  });

  test('Open playlist link spotify', async () => {
    global.open = jest.fn();
    const { container } = render(<Playlist {...initialData} />);
    const playlist = container.querySelector('.playlist');
    expect(playlist).toBeInTheDocument();

    await act(async () => {
      if (playlist) {
        await fireEvent.mouseOver(playlist);
      }
    })
    const overlay: HTMLElement | null = container.querySelector('.playlist-overlay');

    await act(async () => {
      if (overlay) {
        await fireEvent.click(overlay);
      }
    });

    expect(global.open).toBeCalled();
  });
});
