import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Figure } from 'bootstrap-4-react';

import style from './style.scss';

const PlaylistSpotify = ({ playlist }) => {
	return (
		<>
			<h2 className={style.Title}>Spotify Playlists</h2>
			<Row>
				{playlist.map((item, key) => (
					<Col col="sm" key={key} className={style.Card}>
						<a
							className={style.Link}
							href={item.external_urls.spotify}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Figure.Image src={item.images[0].url} />
							<Figure.Caption>{item.name}</Figure.Caption>
						</a>
					</Col>
				))}
			</Row>
		</>
	);
};

PlaylistSpotify.propTypes = {
	playlist: PropTypes.array
};

export default PlaylistSpotify;
