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
import LoadingCard from './components/LoadingCard';
import SearchInput from './components/SearchInpunt';

export default function Playlists() {
  const { loading, title, playlists } = usePlaylist();
  const [filter, setFilter] = React.useState('');

  function hadleChange(ev) {
    setFilter(ev.target.value);
  }
  return (
    <PlaylistsContainer>
      <Header aria-label="spotifood-playlists-header">
        <Title aria-label="spotifood-playlists-header-title">{title}</Title>
        <SearchInput
          aria-label="spotifood-playlists-header-search-input"
          onChange={hadleChange}
        />
      </Header>
      {loading ? (
        <LoadingCard />
      ) : (
        <PlaylistsCardContainer aria-label="spotifood-playlists-list">
          {playlists
            .filter(
              (item) =>
                item.name?.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            )
            .map((item) => (
              <PlaylistCard
                aria-label={`spotifood-playlists-list-card-${item.name}`}
                key={item.id}
              >
                <PlaylistImg
                  aria-label={`spotifood-playlists-list-card-${item.name}-img`}
                  alt={`spotifood-${item.name}-img`}
                  src={item.images[0]?.url}
                />
                <PlaylistTextArea
                  aria-label={`spotifood-playlists-list-card-${item.name}-text-area`}
                >
                  <span
                    aria-label={`spotifood-playlists-list-card-${item.name}-name`}
                  >
                    {item.name}
                  </span>
                  <span
                    aria-label={`spotifood-playlists-list-card-${item.name}-description`}
                  >
                    {item.description}
                  </span>
                </PlaylistTextArea>
              </PlaylistCard>
            ))}
        </PlaylistsCardContainer>
      )}
    </PlaylistsContainer>
  );
}
