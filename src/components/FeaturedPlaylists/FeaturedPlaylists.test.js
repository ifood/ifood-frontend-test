import React from 'react';
import renderer from 'react-test-renderer';
import FeaturedPlaylists from './FeaturedPlaylists';

const defaultProps = {
  playlists: {
    items: [{
      name: 'Cool Sound',
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
  },
  nameFilter: ''
}

describe('<FeaturedPlaylists />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<FeaturedPlaylists { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it(`Should render with "do you search" text`, () => {
    const elem = renderer
      .create(<FeaturedPlaylists />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

  it(`Should render with "no results found" text`, () => {
    const elem = renderer
      .create(<FeaturedPlaylists { ...defaultProps } nameFilter="Mundo Animal" />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

});

