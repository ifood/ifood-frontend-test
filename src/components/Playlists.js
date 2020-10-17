/*eslint-disable*/
import React from 'react';
import usePlaylist from '../hooks/usePlaylist';
import {
  PlaylistsContainer,
  PlaylistCard,
  PlaylistImg,
  PlaylistTextArea,
  Title,
} from '../styles/PlaylistsStyles';

export default function Playlists() {
  const { loading, title, playlists } = usePlaylist();
  if (loading) return <h2>loading</h2>;

  return (
    <main>
      <Title>{title}</Title>
      <PlaylistsContainer>
        {playlists.map((item) => (
          <PlaylistCard key={item.id}>
            <PlaylistImg alt="playlist-img" src={item.images[0]?.url} />
            <PlaylistTextArea>
              <span>{item.name}</span>
              <span>{item.description}</span>
            </PlaylistTextArea>
          </PlaylistCard>
        ))}
      </PlaylistsContainer>
    </main>
  );
}
