/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import { Container, Info, Name, Owner } from './styles';

class Playlist extends Component {
  render() {
    const { playlist } = this.props;

    return (
      <Container className="row featurette">
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
          <Info>PLAYLIST</Info>
          <Name>{playlist.name}</Name>
          <Owner>
            Created by <span>{playlist.owner.display_name}</span> -{' '}
            {playlist.tracks.total} songs
          </Owner>
        </div>
      </Container>
    );
  }
}

export default Playlist;
