import React from 'react';
import { mount } from 'enzyme';
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
      const wrap = mount(
        <PlaylistShowcase playlists={data.playlists} message={data.message} />,
      );

      expect(wrap.find('h1').text()).toBe(data.message);
      expect(wrap.find('div').childAt(0).props().href).toBe(
        data.playlists[0].external_urls.spotify,
      );
    });
    it('should render all playlists', () => {
      const wrap = mount(
        <PlaylistShowcase playlists={data.playlists} message={data.message} />,
      );

      expect(wrap.find('div').children().length).toBe(data.playlists.length);
    });
  });
});
