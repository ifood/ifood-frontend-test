import React, { useCallback } from 'react';
import usePlaylist from '../../contexts/PlaylistContext';
import Input from '../Input/Input';
import Select from '../Select/Select';
import DateTime from '../DateTime/DateTime';

interface FilterProps {
  filter: any;
}

const Filter: React.FC<FilterProps> = ({ filter }) => {
  const { setFilterChoices, removeFilterChoices } = usePlaylist();
  const handleFilters = useCallback(
    (filterName, value) => {
      if (value !== '') {
        setFilterChoices({ [filterName]: value });
      } else {
        removeFilterChoices(filterName);
      }
    },
    [setFilterChoices, removeFilterChoices],
  );

  if (filter.values && filter.values.length) {
    return (
      <Select
        id={filter.id}
        options={filter.values}
        name={filter.name}
        onChange={handleFilters}
      />
    );
  }

  if (filter.id === 'timestamp') {
    return (
      <DateTime id={filter.id} onChange={handleFilters} name={filter.name} />
    );
  }

  return (
    <Input
      validation={filter.validation}
      id={filter.id}
      name={`filter_${filter.name}`}
      label={filter.name}
      onChange={handleFilters}
    />
  );
};

export default Filter;
