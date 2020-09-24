/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import { usePlaylist } from '../../hooks/playlists';
import { useToast } from '../../hooks/toast';

import * as S from './styles';

interface CountryLocale {
  value: string;
  name: string;
}

const Filters: React.FC = () => {
  const [countrys, setCountrys] = useState<CountryLocale[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined,
  );
  const [locales, setLocales] = useState<CountryLocale[]>([]);
  const [selectedLocale, setSelectedLocale] = useState<string | undefined>(
    undefined,
  );
  const [timestamp, setTimestamp] = useState<string | undefined>(undefined);
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');

  const { loadPlaylists } = usePlaylist();

  const { addToast } = useToast();

  useEffect(() => {
    async function loadFilters() {
      try {
        const response = await axios.get(
          'http://www.mocky.io/v2/5a25fade2e0000213aa90776',
        );

        const { filters } = response.data;

        setCountrys([...filters[1].values]);
        setLocales([...filters[0].values]);
      } catch (error) {
        console.warn(error);
      }
    }

    loadFilters();
  }, []);

  useEffect(() => {
    function getPLaylists() {
      loadPlaylists({
        limit: Number(limit),
        timestamp,
        offset: Number(offset),
        country: selectedCountry,
        locale: selectedLocale,
      });
      setTimeout(getPLaylists, 30000);
    }

    getPLaylists();
  }, [
    limit,
    timestamp,
    offset,
    loadPlaylists,
    selectedLocale,
    selectedCountry,
  ]);

  const isNumber = useCallback((value: string) => {
    const regex = /^(\s*|[1-9][0-9]*)$/;

    return regex.test(value);
  }, []);

  return (
    <>
      <S.Filters>
        <select
          name="country"
          id="country"
          value={selectedCountry}
          onChange={e => setSelectedCountry(e.target.value)}
        >
          <option value={undefined} hidden>
            Select Country
          </option>
          {countrys.map(country => (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>
        <select
          name="locale"
          id="locale"
          value={selectedLocale}
          onChange={e => setSelectedLocale(e.target.value)}
        >
          <option value={undefined} hidden>
            Select Locale
          </option>
          {locales.map(locale => (
            <option key={locale.value} value={locale.value}>
              {locale.name}
            </option>
          ))}
        </select>
        <input
          type="datetime-local"
          id="timestamp"
          placeholder="Timestamp"
          name="timestamp"
          value={timestamp}
          onChange={e => {
            setTimestamp(e.target.value);
          }}
        />
        <input
          type="text"
          name="limit"
          placeholder="How many playlist?"
          value={limit}
          onChange={e => {
            const { value } = e.target;

            if (!isNumber(value)) {
              return '';
            }

            if (Number(value) > 50) {
              addToast({
                title: "Cant't find a playlist",
                description: 'You must type a number between 1 and 50',
                type: 'error',
              });
              return;
            }

            setLimit(value);
          }}
        />
        <input
          type="text"
          name="offset"
          placeholder="Offset"
          value={offset}
          onChange={e => {
            const { value } = e.target;

            if (!isNumber(value)) {
              return '';
            }

            setOffset(value);
          }}
        />
      </S.Filters>
    </>
  );
};

export default Filters;
