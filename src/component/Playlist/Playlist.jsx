import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardUI, Icon, Image as ImageUI } from 'semantic-ui-react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import DefaultPlaylistImage from './DefaultPlaylistImage.jpg';

const Card = styled(CardUI)`
  &.ui.card {
    margin: 0;
  }
`;

const Image = styled(ImageUI)`
  object-fit: cover;
`;

function Playlist({ playlist }) {
  if (playlist == null) {
    return null;
  }
  const { name, description, images, owner, tracks } = playlist;
  const image = images?.[0]?.url ? images[0].url : DefaultPlaylistImage;

  function handleClick() {
    if (playlist.external_urls?.spotify != null) {
      window.open(playlist.external_urls.spotify);
    }
  }

  return (
    <Card fluid onClick={handleClick}>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        {tracks?.total != null && (
          <Card.Meta>
            <span>
              <FormattedMessage
                id="playlist.tracks"
                values={{ n: tracks.total }}
              />
            </span>
          </Card.Meta>
        )}
        <Card.Description>
          {/* eslint-disable-next-line react/no-danger */}
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Card.Description>
      </Card.Content>
      {owner != null && (
        <Card.Content extra>
          <Icon name="user" />
          {owner.display_name}
        </Card.Content>
      )}
    </Card>
  );
}

Playlist.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array,
    owner: PropTypes.object,
    tracks: PropTypes.object,
    external_urls: PropTypes.object,
  }).isRequired,
};

export default Playlist;
