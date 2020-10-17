/*eslint-disable*/
import React from 'react';
import useFilters from './hooks/useFilters';
import { FiltersContainer } from './styles/FiltersStyles';
import components from './components';
export default function Filters() {
  const { loading, filters } = useFilters();
  if (loading) return <h3>21</h3>;
  return (
    <FiltersContainer>
      {filters?.map((filter) => {
        return components[filter.id](filter);
      })}
    </FiltersContainer>
  );
}
