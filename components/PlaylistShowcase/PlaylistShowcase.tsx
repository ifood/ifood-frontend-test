import React from 'react';
import { ShowcaseContainer, ShowcaseTitle, Description } from './styles';
import { PlaylistInterface } from '../../interfaces/playlist.interface';
import PlaylistFilters from '../PlaylistFilters/PlaylistFilters';

interface PlaylistShowcaseProps {
  playlists: PlaylistInterface[];
  message: string;
}

const PlaylistShowcase: React.FC<PlaylistShowcaseProps> = ({
  playlists,
  message,
}) => {
  return (
    <>
      <ShowcaseTitle>{message}</ShowcaseTitle>
      <PlaylistFilters />
      <ShowcaseContainer>
        {playlists.map(playlist => (
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
            key={playlist.id}
          >
            <Description>
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </Description>
            <img src={playlist.images[0].url} alt={playlist.name} />
          </a>
        ))}
      </ShowcaseContainer>
    </>
  );
};

export default PlaylistShowcase;
