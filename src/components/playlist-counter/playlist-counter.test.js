import React from 'react';
import PlaylistCounter from './playlist-counter';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('should render correctly with props', () => {
    const playlists = ['one', 'two'];
    const component = shallow(<PlaylistCounter playlists={playlists}/>);
    expect(component).toMatchSnapshot();
});

