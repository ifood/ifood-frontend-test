import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { If, Then } from 'react-if';

const FeaturedPlaylists = ({ filters, playlists, handleGoToPlaylist }) => (
  <div className="container featured-playlists-container">
    <h1>Confira abaixo as playlists recomendadas para você!</h1>
    <div className="row">
      <If condition={!!playlists.length}>
        <Then>
          {
                            playlists.map(playlist => (
                              <div
                                key={playlist.id}
                                className="featured-playlist-item col-md-4 col-sm-12 "
                                onClick={() => handleGoToPlaylist(playlist.external_urls.spotify)}
                              >
                                <Card
                                  className="playlist-item"
                                >
                                  <Card.Img variant="top" src={playlist.images[0].url} />
                                  <Card.Body>
                                    <Card.Title>{ playlist.name }</Card.Title>
                                    <Button
                                      variant="secondary"
                                      className="reset-filters"
                                      onClick={handleGoToPlaylist}
                                    >
                                      Ver Playlist
                                    </Button>
                                  </Card.Body>
                                </Card>
                              </div>
                            ))
                        }
        </Then>
      </If>
      <If condition={filters.length && !playlists.length}>
        <Then>
          <h5>Nenhum resultado encontrado para esse filtro! &nbsp; =/</h5>
        </Then>
      </If>
    </div>
  </div>
);

FeaturedPlaylists.propTypes = {
  playlists: PropTypes.array.isRequired,
  handleGoToPlaylist: PropTypes.func,
};

FeaturedPlaylists.defaultProps = {
  playlists: [],
};

export default FeaturedPlaylists;

// TODO: prop types
