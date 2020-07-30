import React, { useCallback, useRef } from 'react';
import { AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useFilters } from '../../hooks/filters';

import OptionsFilter from '../OptionsFilter';
import DateFilter from '../DateFilter';
import QuantityFilter from '../QuantityFilter';
import SearchInput from '../SearchInput';

import {
  Accordion,
  Button,
  Container,
  Filter,
  FiltersContainer,
} from './styles';

const Filters: React.FC = () => {
  const { defaultFilters } = useFilters();
  const formRef = useRef<FormHandles>(null);

  const getFilterComponent = useCallback(filter => {
    if (filter.validation?.entityType === 'DATE_TIME') {
      return <DateFilter />;
    }

    if (filter.id === 'limit') {
      return <QuantityFilter />;
    }

    return <OptionsFilter name={filter.id} values={filter.values} />;
  }, []);

  const handleSubmit = useCallback(data => {
    console.log('submit form');
    console.log(data);
  }, []);

  return (
    <Container>
      <h2>Filtros</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Filter>
          <SearchInput name="search" />
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
        <Button type="submit" variant="contained" fullWidth>
          Filtrar
        </Button>
      </Form>
    </Container>
  );
};

export default Filters;
