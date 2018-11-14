import React from 'react';
import { shallow } from 'enzyme';
import PlaylistsList from './PlaylistsList';

describe('Routes/ShowPlaylists/components/PlaylistsList', () => {
  test('should render a PlaylistsList component', () => {
    const values = [
      { name: 'foo', id: 'foo' },
      { name: 'bar', id: 'bar' },
    ];
    const wrapper = shallow(<PlaylistsList list={values} />);
    // checking only the first item in the list
    const id = values[0].id;
    expect(wrapper.find(`#${`playlistItem-${id}`}`).exists()).toBe(true);
  });

  test('should render nothing in case of an empty list prop', () => {
    const wrapper = shallow(<PlaylistsList list={[]} />);
    expect(wrapper.find('div').exists()).toBe(false);
  })
});
