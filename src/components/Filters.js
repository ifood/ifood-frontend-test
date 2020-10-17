/*eslint-disable*/
import React from 'react';
import useFilters from '../hooks/useFilters';
import { FiltersContainer, FilterField, Filter } from '../styles/FiltersStyles';

export default function Filters() {
  const { loading, filters } = useFilters();

  return (
    <FiltersContainer>
      {filters.map((filter) => (
        <Filter key={filter.id}>
          <FilterField label={filter.name} />
        </Filter>
      ))}
    </FiltersContainer>
  );
}
