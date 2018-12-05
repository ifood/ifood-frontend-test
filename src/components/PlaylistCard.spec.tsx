import React from 'react';
import Img from 'react-image';
import { create } from 'react-test-renderer';

import { IPlaylist } from '../api/spotify';
import PlaylistCard from './PlaylistCard';

const playlist: IPlaylist = {
  external_urls: {
    spotify: 'https://open.spotify',
  },
  href: '/playlists/37i9dQZF1DX7rOY2tZUw1k',
  id: '37i9dQZF1DX7rOY2tZUw1k',
  images: [
    {
      height: 300,
      url: 'https://i.scdn.co/image/',
      width: 300,
    },
  ],
  name: 'Timeless Love Songs',
};

describe('Card component', () => {
  it('', () => {
    expect.assertions(2);
    const card = create(<PlaylistCard playlist={playlist} />);
    const rootInstance = card.root;

    const image = rootInstance.findByType(Img);
    expect(image.props.src).toBe(playlist.images[0].url);

    const name = rootInstance.findByProps({ title: playlist.name });
    expect(name.children).toEqual([playlist.name]);
  });
});
