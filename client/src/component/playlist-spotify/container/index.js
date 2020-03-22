import React from 'react';
import PropTypes from 'prop-types';

import PlaylistSpotify from '../presentation';

class PlaylistSpotifyContainer extends React.PureComponent {
	static propTypes = {
		playlist: PropTypes.array,
		name: PropTypes.string
	};

	render() {
		const { playlist } = this.props;
		return <PlaylistSpotify playlist={playlist} />;
	}
}

export default PlaylistSpotifyContainer;
