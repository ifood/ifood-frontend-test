import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Card, Image } from 'semantic-ui-react';
import Playlist from './Playlist';
import DefaultPlaylistImage from './DefaultPlaylistImage.jpg';

const MyPlaylist = {
  name: 'Hit Rewind',
  description: "Listen to all the tracks you've been missing. Cover: Lady Gaga",
  external_urls: {
    spotify: 'https://not-a-spotify-url',
  },
  images: [
    {
      url: 'https://not-a-imagem-url',
    },
  ],
  owner: {
    display_name: 'Spotify',
  },
  tracks: {
    total: 75,
  },
};

describe('<Playlist />', () => {
  it('snapshot', () => {
    const playlist = mount(<Playlist playlist={MyPlaylist} />);
    jestExpect(toJson(playlist)).toMatchSnapshot();
  });

  it('should return null if a playlist are not provided', () => {
    const playlist = shallow(<Playlist />);
    expect(playlist.type()).to.be.null;
  });

  describe('whend playlist is clicked', () => {
    global.open = jest.fn();
    const playlist = mount(<Playlist />);

    beforeEach(() => {
      global.open.mockClear();
    });

    it('should open a new window with the Spotify URL', () => {
      playlist.setProps({ playlist: MyPlaylist });
      playlist.find(Card).simulate('click');
      expect(global.open.mock.calls.length).to.be.equal(1);
      expect(global.open.mock.calls[0][0]).to.be.equal(
        MyPlaylist.external_urls.spotify
      );
    });

    it('should not open a new window if playlist has no Spotify URL', () => {
      /* eslint-disable-next-line camelcase */
      const { external_urls, ...noUrlPlaylist } = MyPlaylist;
      playlist.setProps({ playlist: noUrlPlaylist });
      playlist.find(Card).simulate('click');
      expect(global.open.mock.calls.length).to.be.equal(0);
    });
  });

  it('should not render tracks if it is not provided', () => {
    const { tracks, ...noTracksPlaylist } = MyPlaylist;
    const playlist = shallow(<Playlist playlist={noTracksPlaylist} />);
    expect(playlist.find(Card.Meta)).to.have.lengthOf(0);
  });

  it('should not render an extra Card.Content if the playlist has no owner', () => {
    const { owner, ...noOwnerPlaylist } = MyPlaylist;
    const playlist = shallow(<Playlist playlist={noOwnerPlaylist} />);
    expect(
      playlist.findWhere((n) => n.type() === Card.Content && n.props()?.extra)
    ).to.have.lengthOf(0);
  });

  it('should render a standard image if playlist has no images', () => {
    const { images, ...noImagesPlaylist } = MyPlaylist;
    const playlist = shallow(<Playlist playlist={noImagesPlaylist} />);
    const image = playlist.find(Image);
    expect(image.props().src).to.be.equal(DefaultPlaylistImage);
  });
});
