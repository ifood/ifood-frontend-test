import React from "react";
import { shallow } from 'enzyme';
import { PlaylistItems, PlaylistItem } from './PlaylistItems';

describe('PlaylistItems component', () => {
  const items: PlaylistItem[] = [
    { name: 'name 1', artist: 'artist 1', time: '1:00' },
    { name: 'name 2', artist: 'artist 2', time: '2:00' },
    { name: 'name 3', artist: 'artist 3', time: '3:00' }
  ];

  it('Renders without crashing', () => {
    const wrapper = shallow(<PlaylistItems items={items} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Render all items', () => {
    const wrapper = shallow(<PlaylistItems items={items} />);
    expect(wrapper.children()).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });
});
