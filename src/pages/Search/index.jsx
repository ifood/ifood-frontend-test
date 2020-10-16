import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import * as S from './styles';

import Container from './../../components/Container';
import InputSearch from './../../components/InputSearch';
import SelectFilter from './../../components/SelectFilter';
import InputFilter from './../../components/InputFilter';
import Playlist from './../../components/Playlist';

import getPlaylists from './../../services/playlists';
import getFilters from './../../services/filters';

import sliderSettings from './sliderSettings';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchPlaylists = async (options, value) => {
    const result = await getPlaylists(options);

    const {
      playlists: {
        items,
      },
    } = result;

    const itemsFiltered = items.filter(item =>
      value && item
        .name
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setPlaylists(itemsFiltered)
  };


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


  const handleInputChange = async (e) => {
    const {
      target: {
        value,
      }
    } = e;

    setInputValue(value);
    await fetchPlaylists(selectedOpt, value);
  };


  const handleFiltersChange = async e => {
    const {
      target: {
        id,
        value,
      }
    } = e;

    const options = { ...selectedOpt, [id]: value };

    setSelectedOpt(options);
    await fetchPlaylists(options, inputValue);
  };

  const hasFilterResult = filters.length !== 0 && !isLoading;
  const hasPlaylistResult = playlists.length !== 0 && !isLoading;

  return (
    <Container>
      <InputSearch
        onChange={handleInputChange}
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
                    onChange={handleFiltersChange}
                    optValues={values}
                  />
                  : <InputFilter
                    id={id}
                    min={validation.min}
                    max={validation.max}
                    onChange={handleFiltersChange}
                    placeholder={validation.pattern}
                    type={validation.primitiveType || validation.entityType}
                  />
                }
              </S.SubGroup>
            )
          })}
      </S.Group>

      {hasPlaylistResult
        &&
        <>
          <S.Line />
          <S.FeatureTitle>Feature Playlists</S.FeatureTitle>
        </>
      }

      <Slider {...sliderSettings(playlists.length)}>
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
      </Slider>
    </Container>
  )
};

export default Search;
