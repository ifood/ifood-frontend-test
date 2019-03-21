import React, { Component } from 'react';

import './Playlist.css';

export default class Playlist extends Component {
	render() {
		const { playlist } = this.props;

		return (
			<li className="row featurette">
				<div className="col-md-2">
					<a
						className="url-info-playlist"
						href={playlist.external_urls.spotify}
						target="blank"
					>
						<img height={100} src={playlist.images[0].url} alt="SpotiFood" />{' '}
					</a>
				</div>
				<div className="col-md-10">
					<p className="text-info-playlist">PLAYLIST</p>
					<p className="name-info-playlist">{playlist.name}</p>
					<p className="owner-info-playlist">
						Created by <span>{playlist.owner.display_name}</span> -{' '}
						{playlist.tracks.total} songs
					</p>
				</div>
			</li>
		);
	}
}
