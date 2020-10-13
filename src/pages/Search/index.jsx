import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Container from './../../components/Container';
import InputSearch from './../../components/InputSearch';
import SelectFilter from './../../components/SelectFilter';
import InputFilter from './../../components/InputFilter';
import Playlist from './../../components/Playlist';

import getPlaylists from './../../services/playlists';
import getFilters from './../../services/filters';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState([]);
  const [playlists, setPlaylists] = useState([]);

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

  const handleChange = async () => {
    const searchByName = await getPlaylists();
    return setPlaylists(searchByName.playlists.items);
  };

  const hasFilterResult = filters.length !== 0 && !isLoading;
  const hasPlaylistResult = playlists.length !== 0 && !isLoading;

  return (
    <Container>
      {hasPlaylistResult
        && <S.FeatureTitle>Feature Playlists</S.FeatureTitle>
      }

      <S.Group>
        {hasPlaylistResult
          && playlists.map((playlist, key) => {

            const {
              external_urls: {
                spotify,
              },
              images,
              name,
              description,
            } = playlist;

            return (
              <Playlist
                key={key}
                href={spotify}
                src={images[0].url}
                alt={name}
                title={name}
                description={description}
              />
            )
          })
        }
      </S.Group>

      {hasPlaylistResult && <S.Line />}

      <InputSearch
        onChange={handleChange}
      />
      <S.Title>Filtros</S.Title>
      <S.Group>
        {hasFilterResult
          && filters.map((filter, key) => {
            const {
              id,
              name,
              values,
              validation,
            } = filter;

            return (
              <S.SubGroup key={key}>
                <S.Subtitle>{name}</S.Subtitle>
                {values
                  ? <SelectFilter
                    id={id}
                    name={name}
                    onChange={e => setSelectedOpt(e.target.value)}
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
