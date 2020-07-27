import React from 'react';
import { AccordionSummary, AccordionDetails } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import {
  Accordion,
  Button,
  Container,
  Filter,
  FiltersContainer,
  TextInput,
  ValuesContainer,
  ValueField,
  Checkbox,
  DateTimePicker,
  QuantitySlider,
} from './styles';

const Filters: React.FC = () => {
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
              <Filter>
                <span>Locale: </span>
                <ValuesContainer>
                  <ValueField>
                    <Checkbox
                      id="en_AU"
                      name="en_AU"
                      inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    />
                    <label htmlFor="en_AU">en_AU</label>
                  </ValueField>
                  <ValueField>
                    <Checkbox
                      id="de_De"
                      name="de_De"
                      inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    />
                    <label htmlFor="de_De">de_De</label>
                  </ValueField>
                </ValuesContainer>
              </Filter>
              <Filter>
                <span>País: </span>
                <ValuesContainer>
                  <ValueField>
                    <Checkbox
                      id="AU"
                      name="AU"
                      inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    />
                    <label htmlFor="AU">Austrália</label>
                  </ValueField>
                  <ValueField>
                    <Checkbox
                      id="DE"
                      name="DE"
                      inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                    />
                    <label htmlFor="DE">Alemanha</label>
                  </ValueField>
                </ValuesContainer>
              </Filter>
              <Filter>
                <DateTimePicker
                  id="datetime-local"
                  label="Data e hora"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Filter>
              <Filter>
                <span>Quantidade</span>
                <QuantitySlider
                  defaultValue={25}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={5}
                  marks
                  min={0}
                  max={50}
                />
              </Filter>
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
