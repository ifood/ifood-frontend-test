import React from 'react';
import TotalTracks from './total-tracks';
import { shallow } from 'enzyme';

// Mounting - Full DOM rendering including child components
// Shallow - Renders only the single component, not including its children,
// this is useful to isolate the component for pure unit testing.
// Render - Renders to static HTML, including children

it('should render correctly with props', () => {
    const playlistToShow = [{"name":"Deep Sleep",
    "imageUrl":"https://pl.scdn.co/images/pl/default/ff0412251a8e8d5702baba4867e003a68de77417",
    "numberOfTracks":80,"owner":"Spotify"},{"name":"Late Night Vibes",
    "imageUrl":"https://pl.scdn.co/images/pl/default/ed8ca7d059f668db5a86c73cf16262507cb0137a",
    "numberOfTracks":75,"owner":"Spotify"},{"name":"Dark & Stormy",
    "imageUrl":"https://pl.scdn.co/images/pl/default/53fa6e468f21b400529aac828a93c8efd6699b59",
    "numberOfTracks":30,"owner":"Spotify"},{"name":"White Noise",
    "imageUrl":"https://pl.scdn.co/images/pl/default/5c87b3873ea9add5937fb51271f1953862b29887",
    "numberOfTracks":113,"owner":"Spotify"},{"name":"Soft Rock",
    "imageUrl":"https://pl.scdn.co/images/pl/default/0e4e5e8dd9ce24d09a81cc6b496c9b4241d6e1cc",
    "numberOfTracks":100,"owner":"Spotify"},{"name":"Calm Down",
    "imageUrl":"https://pl.scdn.co/images/pl/default/f9c73a6f7617c55e97869bd6a49279dd56f1619e",
    "numberOfTracks":70,"owner":"Spotify"},{"name":"Love, Sex, & Water",
    "imageUrl":"https://pl.scdn.co/images/pl/default/f3fcf4eefe01d27fe039621d1996217b7c0bea74",
    "numberOfTracks":50,"owner":"Spotify"},{"name":"Sleep",
    "imageUrl":"https://pl.scdn.co/images/pl/default/f499b0497289a6432dcccfb6de5f57164739d525",
    "numberOfTracks":170,"owner":"Spotify"},{"name":"Peaceful Piano",
    "imageUrl":"https://pl.scdn.co/images/pl/default/56228f9353b23405516a6ea8af1c22083f450b57",
    "numberOfTracks":166,"owner":"Spotify"},{"name":"ASMR Sleep Sounds",
    "imageUrl":"https://pl.scdn.co/images/pl/default/567d4bf944b71bff926d0ac1d2eb44950e602d30",
    "numberOfTracks":61,"owner":"Spotify"},{"name":"Women of Jazz",
    "imageUrl":"https://pl.scdn.co/images/pl/default/ebabc38c6406ba8e22819aab9c6ab4982c70a606",
    "numberOfTracks":93,"owner":"Spotify"},{"name":"Night Rain",
    "imageUrl":"https://pl.scdn.co/images/pl/default/971e797aa01c385667cccbfada26ad242ab95d91",
    "numberOfTracks":97,"owner":"Spotify"},{"name":"Chill Hits",
    "imageUrl":"https://pl.scdn.co/images/pl/default/b1ac910d221ff28c82af9c80ff76fa26dd474ec1",
    "numberOfTracks":100,"owner":"Spotify"},{"name":"Peaceful Meditation",
    "imageUrl":"https://pl.scdn.co/images/pl/default/6130aa8a52cfef62d11073c2b04d38c93bc786bc",
    "numberOfTracks":83,"owner":"Spotify"},{"name":"The Sleep Machine: Rainforest",
    "imageUrl":"https://pl.scdn.co/images/pl/default/e73c55a15c529d508134e13212c93367b6c6cd36",
    "numberOfTracks":37,"owner":"Spotify"},{"name":"Chilled R&B",
    "imageUrl":"https://pl.scdn.co/images/pl/default/a4af47fc2ff189edd0beaaa64fa70be62c6998eb",
    "numberOfTracks":50,"owner":"Spotify"}];

    const component = shallow(<TotalTracks playlists={playlistToShow}/>);
    expect(component).toMatchSnapshot();
});

