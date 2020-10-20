/*eslint-disable*/
import React from 'react';
import {
  PlaylistsContainer,
  PlaylistsCardContainer,
  Title,
  Header,
} from './styles/PlaylistsStyles';
import LoadingCard from './components/LoadingCard';
import SearchInput from './components/SearchInput';
import PlaylistCard from './components/PlaylistCard';

export default function Playlists({
  loading,
  title = 'Escolhas do Editor',
  data,
}) {
  const [filter, setFilter] = React.useState('');

  function hadleChange(ev) {
    setFilter(ev.target.value);
  }
  return (
    <PlaylistsContainer>
      <Header aria-label="spotifood-playlists-header">
        <Title aria-label="spotifood-playlists-header-title">{title}</Title>
        <SearchInput onChange={hadleChange} />
      </Header>
      {loading ? (
        <LoadingCard />
      ) : (
        <PlaylistsCardContainer aria-label="spotifood-playlists-list">
          {data
            .filter(
              (item) =>
                item.name?.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            )
            .map((item) => (
              <PlaylistCard data={item} key={item.id} />
            ))}
        </PlaylistsCardContainer>
      )}
    </PlaylistsContainer>
  );
}
