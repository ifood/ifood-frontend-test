import React, { useState } from 'react';
import usePlaylist from '../../contexts/PlaylistContext';
import Filter from '../Filter/Filter';
import Input from '../Input/Input';
import { Container, Toggler } from './styles';

const PlaylistFilters: React.FC = () => {
  const { filterFields, filterByText } = usePlaylist();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Toggler onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? 'Fechar filtros' : 'Abrir filtros'}
      </Toggler>
      <Container
        id="fields_container"
        style={{
          maxHeight: showFilters ? 1000 : 0,
        }}
      >
        <Input
          id="name"
          name="filter_name"
          label="Nome"
          onChange={filterByText}
        />
        {filterFields.map(filter => (
          <Filter key={filter.id} filter={filter} />
        ))}
      </Container>
    </>
  );
};

export default PlaylistFilters;
