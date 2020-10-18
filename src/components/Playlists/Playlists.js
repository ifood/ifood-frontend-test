/*eslint-disable*/
import React from 'react';
import usePlaylist from './hooks/usePlaylist';
import {
  PlaylistsContainer,
  PlaylistsCardContainer,
  PlaylistCard,
  PlaylistImg,
  PlaylistTextArea,
  Title,
  Header,
} from './styles/PlaylistsStyles';
import LoadingCard from './LoadingCard';
import SearchInput from './components/SearchInpunt';

export default function Playlists() {
  const { loading, title, playlists } = usePlaylist();
  const [filter, setFilter] = React.useState('');

  function hadleChange(ev) {
    setFilter(ev.target.value);
  }
  return (
    <PlaylistsContainer>
      <Header>
        <Title>{title}</Title>
        <SearchInput onChange={hadleChange} />
      </Header>
      {loading ? (
        <LoadingCard />
      ) : (
        <PlaylistsCardContainer>
          {playlists
            .filter(
              (item) =>
                item.name?.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            )
            .map((item) => (
              <PlaylistCard key={item.id}>
                <PlaylistImg alt="playlist-img" src={item.images[0]?.url} />
                <PlaylistTextArea>
                  <span>{item.name}</span>
                  <span>{item.description}</span>
                </PlaylistTextArea>
              </PlaylistCard>
            ))}
        </PlaylistsCardContainer>
      )}
    </PlaylistsContainer>
  );
}
