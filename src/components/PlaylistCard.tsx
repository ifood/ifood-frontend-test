import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React, { Fragment, PureComponent } from 'react';
import Img from 'react-image';
import styled from 'styled-components';

import { IPlaylist } from '../api/spotify';

interface IProps {
  playlist: IPlaylist;
}

const CARD_SIZE = '15rem';

const StyledCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1.6em;
  width: ${CARD_SIZE};

  /* truncate playlist name */
  .playlist-name {
    width: ${CARD_SIZE};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6em;
  }
`;

const StyledImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  height: ${CARD_SIZE};
  width: ${CARD_SIZE};

  & img {
    max-height: ${CARD_SIZE};
    max-width: ${CARD_SIZE};
  }
`;

const DiscPlaceholder = () => (
  <Icon className='has-text-light' icon='compact-disc' size='10x' />
);

export default class PlaylistCard extends PureComponent<IProps> {
  public render() {
    const { playlist } = this.props;
    return (
      <StyledCardContainer>
        <a href={playlist.external_urls.spotify} target='_blank'>
          <StyledImageContainer>
            <Img
              className='image'
              src={playlist.images[0].url}
              loader={<DiscPlaceholder />}
              unloader={'failed to load image'}
            />
          </StyledImageContainer>
        </a>
        <div
          className='playlist-name has-text-centered has-text-weight-light'
          title={playlist.name}
        >
          {playlist.name}
        </div>
      </StyledCardContainer>
    );
  }
}
