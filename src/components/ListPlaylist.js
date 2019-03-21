import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playlistsActions from '../actions/playlists';

import './ListPlaylist.css';

import Playlist from '../components/Playlist';

class ListPlaylist extends Component {
	state = {};

	render() {
		const { playlists } = this.props;

		let data = playlists[0];

		if (data !== undefined) {
			return data.length > 0 ? (
				<>
					{data.map(item => (
						<Playlist key={item.id} playlist={item} />
					))}
				</>
			) : (
				<div className="not-found-results">
					<h2>No results found!</h2>
					<p>
						Please make sure your words are spelled correctly or use less of
						different keywords.
					</p>
				</div>
			);
		} else {
			return (
				<div className="text-center">
					<div className="spinner-border text-success" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(playlistsActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListPlaylist);
