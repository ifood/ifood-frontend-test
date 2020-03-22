import React from 'react';

import ListFilterContainer from '../../filter/container';
import PlaylistSpotifyContainer from '../../playlist-spotify/container';

import { Container } from 'bootstrap-4-react';

class MainContainer extends React.PureComponent {
	state = {
		playlist: []
	};

	receiveFeaturedList = data => {
		this.setState({ playlist: data });
	};

	render() {
		const { playlist } = this.state;
		return (
			<Container>
				<ListFilterContainer receiveFeaturedList={this.receiveFeaturedList} />
				{Boolean(playlist.length) && (
					<PlaylistSpotifyContainer playlist={playlist} />
				)}
			</Container>
		);
	}
}

export default MainContainer;
