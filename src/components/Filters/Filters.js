/*eslint-disable*/
import React from 'react';
import useFilters from './hooks/useFilters';
import { FiltersContainer } from './styles/FiltersStyles';
import components from './components';

export default function Filters({ ...props }) {
  const { loading, filters, setFilter } = useFilters();
  if (loading) return <h3>loading...</h3>;
  return (
    <FiltersContainer {...props}>
      {filters?.map((filter) => {
        return (
          <div key={filter.id}>{components[filter.id](filter, setFilter)}</div>
        );
      })}
    </FiltersContainer>
  );
}
