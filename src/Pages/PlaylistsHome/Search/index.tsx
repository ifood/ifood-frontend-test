import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import ExitToApp from '@material-ui/icons/ExitToAppOutlined';
import Tooltip from '@material-ui/core/Tooltip';

import { useFeaturedPlaylist } from '../../../Hooks/playlistsHook';
import { useAuth } from '../../../Hooks/auth';

import { Container, FilterButton, Input } from './styles';

const Search: React.FC = () => {
  const { signOut } = useAuth();
  const { setSearch } = useFeaturedPlaylist();

  const handleSearchChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(target.value);
  };

  return (
    <Container>
      <Tooltip title="Filtros" aria-label="Filtros">
        <FilterButton >
          <MenuIcon />
        </FilterButton>
      </Tooltip>

      <Input
        onChange={handleSearchChange}
        placeholder="Busque por nome, música ou gênero...."
        inputProps={{ 'aria-label': 'Buscar por nome, música ou gênero' }}
      />

      <Tooltip title="SignOut" aria-label="SignOut">
        <IconButton
          aria-label="SignOut"
          onClick={signOut}
        >
          <ExitToApp />
        </IconButton>
      </Tooltip>
    </Container>
  );
};

export default Search;
