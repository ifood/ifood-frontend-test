import React from 'react';

import { Container } from './styles';
import { IPlaylists } from '../../config/interfaces';

interface IPlaylistsProps {
    listItems: IPlaylists[]
}

const Playlists: React.FC<IPlaylistsProps> = ({listItems}) => {
  return (
    <Container>
    {listItems.map((playlist) => (
      <a
        href={playlist.external_urls.spotify}
        target="_blank"
        key={playlist.id}
        rel="noopener noreferrer"
      >
        <img src={playlist.images[0].url} alt={playlist.name} />
        <div>
          <strong>{playlist.name}</strong>
          <p>{playlist.description}</p>
        </div>
      </a>
    ))}
  </Container>
  );
}

export default Playlists;