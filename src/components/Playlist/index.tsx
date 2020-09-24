import React from 'react';
import { usePlaylist } from '../../hooks/playlists';

import * as S from './styles';

const Playlist: React.FC = () => {
  const { playlists } = usePlaylist();

  return (
    <S.PlaylistContainer>
      {playlists.length > 0 ? (
        playlists.map(playlist => (
          <a
            href={playlist.external_urls.spotify}
            target="__blank"
            key={playlist.name}
          >
            <S.PlaylistCard>
              <div className="card-inner">
                <S.CardFront image={playlist.images[0].url} />
                <S.CardBack>
                  <h2>{playlist.name}</h2>
                  <p>{playlist.description}</p>
                </S.CardBack>
              </div>
            </S.PlaylistCard>
          </a>
        ))
      ) : (
        <h1>No playlist match with this search</h1>
      )}
    </S.PlaylistContainer>
  );
};

export default Playlist;
