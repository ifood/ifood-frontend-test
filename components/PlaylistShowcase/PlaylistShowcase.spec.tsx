import React from 'react';
import { mount, shallow } from 'enzyme';
import PlaylistShowcase from './PlaylistShowcase';

const data = {
  message: `Editor's picks`,
  playlists: [
    {
      id: '1',
      external_urls: {
        spotify: `https://localhost:3000/1`,
      },
      name: 'Name 1',
      images: [{ url: `https://localhost:3000/1.png` }],
    },
    {
      id: '2',
      external_urls: {
        spotify: `https://localhost:3000/2`,
      },
      name: 'Name 2',
      images: [{ url: `https://localhost:3000/2.png` }],
    },
    {
      id: '3',
      external_urls: {
        spotify: `https://localhost:3000/3`,
      },
      name: 'Name 3',
      images: [{ url: `https://localhost:3000/3.png` }],
    },
  ],
};

describe('Components', () => {
  describe('PlaylistShowcase', () => {
    it('should render without throwing an error', () => {
      const wrap = shallow(
        <PlaylistShowcase playlists={data.playlists} message={data.message} />,
      );

      expect(wrap).toBeTruthy();
    });
  });
});
