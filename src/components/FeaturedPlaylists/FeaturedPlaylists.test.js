import React from 'react';
import renderer from 'react-test-renderer';
import FeaturedPlaylists from './FeaturedPlaylists';

const defaultProps = {
  playlists: {
    items: [{
      name: 'Playlist name',
      images: [{
        url: 'some/image/path'
      }],
      tracks: {
        total: 55
      },
      external_urls: {
        spotify: 'some-external-url'
      }
    }]
  }
}

describe('<FeaturedPlaylists />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<FeaturedPlaylists { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it('Should render empty text', () => {
    const elem = renderer
      .create(<FeaturedPlaylists />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

});

