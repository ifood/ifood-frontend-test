import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Container from './../../components/Container';
import InputSearch from './../../components/InputSearch';
import SelectFilter from './../../components/SelectFilter';
import InputFilter from './../../components/InputFilter';

import getToken from './../../services/token'
import getPlaylists from './../../services/playlists';
import getFilters from './../../services/filters';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchFilters = async () => {
      const response = await getFilters();
      const results = await response.json();

      setIsLoading(false);

      setFilters(results.filters);
    };

    fetchFilters();

  }, []);

  const hasResult = filters.length !== 0 && !isLoading;

  return (
    <Container>
      <InputSearch />
      <S.Title>Filtros</S.Title>
      <S.Group>
        {hasResult
          && filters.map(filter => {
            const {
              id,
              name,
              values,
              validation,
            } = filter;

            return (
              <S.SubGroup>
                <S.Subtitle>{name}</S.Subtitle>
                {values
                  ? <SelectFilter
                    id={id}
                    name={name}
                    optValues={values}
                  />
                  : <InputFilter
                    min={validation.min}
                    max={validation.max}
                    placeholder={validation.pattern}
                    type={validation.primitiveType}
                  />
                }
              </S.SubGroup>
            )
          })}
      </S.Group>
    </Container>
  )
}

export default Search; 
