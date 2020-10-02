/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef, react/jsx-filename-extension, react/prop-types */
import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Card } from '@material-ui/core';
import PlaylistCard from './PlaylistCard';

const playlist = {
  description: 'Description test',
  external_urls: {
    spotify: 'https://href-test',
  },
  href: 'https://hrf-test',
  id: '1HJ38ZSXZ123SA',
  images: [
    {
      url: 'https://img-test',
    },
  ],
  name: 'PlaylistTest',
  owner: {
    display_name: 'Spotify',
    external_urls: {
      spotify: 'https://open.spotify.com/user/spotify',
    },
    href: 'https://api.spotify.com/v1/users/spotify',
    id: 'spotify',
  },
  tracks: {
    total: 62,
  },
  type: 'playlist',
};

describe('<PlaylistCard />', () => {
  it('snapshot', async () => {
    const wrapper = mount(<PlaylistCard playlist={playlist} />);
    jestExpect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should return null when playlist prop not provided', () => {
    const card = shallow(<PlaylistCard />);
    expect(card.type()).to.be.null;
  });

  describe('whend card clicked', () => {
    global.open = jest.fn();
    const card = mount(<PlaylistCard />);

    beforeEach(() => {
      global.open.mockClear();
    });

    it('should open a new window with external_url', () => {
      card.setProps({ playlist });
      card.find(Card).simulate('click');

      expect(global.open.mock.calls.length).to.be.equal(1);

      expect(global.open.mock.calls[0][0]).to.be.equal(
        playlist.external_urls.spotify,
      );
    });

    it('should not open a new window when no external_url specified', () => {
      const { external_urls, ...rest } = playlist;
      card.setProps({ playlist: rest });
      card.find(Card).simulate('click');

      expect(global.open.mock.calls.length).to.be.equal(0);
    });
  });
});
