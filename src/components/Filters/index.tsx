import React, { useCallback } from 'react';
import { AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import { useFilters } from '../../hooks/filters';

import OptionsFilter from '../OptionsFilter';
import DateFilter from '../DateFilter';
import QuantityFilter from '../QuantityFilter';

import {
  Accordion,
  Button,
  Container,
  Filter,
  FiltersContainer,
  TextInput,
} from './styles';

const Filters: React.FC = () => {
  const { defaultFilters } = useFilters();
  console.log(defaultFilters);

  const getFilterComponent = useCallback(filter => {
    if (filter.validation?.entityType === 'DATE_TIME') {
      return <DateFilter />;
    }

    if (filter.id === 'limit') {
      return <QuantityFilter />;
    }

    return <OptionsFilter values={filter.values} />;
  }, []);

  return (
    <Container>
      <h2>Filtros</h2>
      <form>
        <Filter>
          <TextInput id="standard-basic" label="Nome da playlist" fullWidth />
        </Filter>
        <Accordion>
          <AccordionSummary
            aria-controls="filters-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Ver todos
          </AccordionSummary>
          <AccordionDetails>
            <FiltersContainer>
              {defaultFilters
                .filter(item => item.id !== 'offset')
                .map(filter => (
                  <Filter key={filter.id}>
                    <span>{`${filter.name}: `}</span>
                    {getFilterComponent(filter)}
                  </Filter>
                ))}
            </FiltersContainer>
          </AccordionDetails>
        </Accordion>
        <Button variant="contained" fullWidth>
          Filtrar
        </Button>
      </form>
    </Container>
  );
};

export default Filters;
