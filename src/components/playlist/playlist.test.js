import React from 'react';
import Playlist from './playlist';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('should render correctly with props', () => {
    const playlist = {
        "name":"Sweet Soul Chillout",
        "imageUrl":"https://pl.scdn.co/images/pl/default/dd52dbcce4e10a2feb519e9c282b4d3b0dcc7442",
        "numberOfTracks": "36",
        "owner":"Spotify"};

    const component = shallow(<Playlist playlist={playlist}/>);
    expect(component).toMatchSnapshot();
});

