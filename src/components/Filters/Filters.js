/*eslint-disable*/
import React from 'react';
import useFilters from './hooks/useFilters';
import { FiltersContainer } from './styles/FiltersStyles';

export default function Filters() {
  const { loading, filters, types } = useFilters();

  return (
    <FiltersContainer>
      {/* {filters.map((filter) => {
        return types[filter.id](filter);
      })} */}
    </FiltersContainer>
  );
}
