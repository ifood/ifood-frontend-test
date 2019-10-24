import React from 'react';
import renderer from 'react-test-renderer';
import PlaylistCard from './PlaylistCard';

const defaultProps = {
  name: 'card name',
  tracks: { total: 57 },
  imageUrl: 'some/image/path',
  externalUrl: 'some-external-url'
}

describe('<PlaylistCard />', () => {

  it('Should render correctly', () => {
    const elem = renderer
      .create(<PlaylistCard { ...defaultProps } />)
      .toJSON();
    expect(elem).toMatchSnapshot();
  });

});

