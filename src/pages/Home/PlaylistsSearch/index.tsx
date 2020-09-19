import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/MenuOutlined';
import ExitToApp from '@material-ui/icons/ExitToAppOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import { useFeaturedPlaylist } from '../../../hooks/featuredPlaylists';

import { Container, FilterButton, Input } from './styles';

interface PlaylistsSearchProps {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const PlaylistsSearch: React.FC<PlaylistsSearchProps> = ({ setMobileOpen }) => {
  const { setSearch } = useFeaturedPlaylist();

  const handleMobileOpenClick = () => setMobileOpen(true);

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(target.value);
  };

  const handleLogoff = () => {
  };

  return (
    <Container>
      <Tooltip title="Filtros" aria-label="Filtros">
        <FilterButton onClick={handleMobileOpenClick}>
          <MenuIcon />
        </FilterButton>
      </Tooltip>

      <Input
        onChange={handleSearchChange}
        placeholder="Buscar por nome..."
        inputProps={{ 'aria-label': 'Buscar por nome' }}
      />

      <Tooltip title="Sair" aria-label="Sair">
        <IconButton
          aria-label="Logoff"
          onClick={handleLogoff}
        >
          <ExitToApp />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default PlaylistsSearch;
