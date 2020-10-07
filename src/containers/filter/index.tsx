import React, { useEffect, useState, useContext } from 'react';

import { getFilterData } from 'services/api-mocky';
import { getFeaturedList } from 'services/api-spotify';

import { DateField } from 'components/date-field';
import { Select } from 'components/select';
import { Input } from 'components/input';
import { Label } from 'components/label';

import { PlayListContext } from 'store/play-list-store';

import * as S from './styles';

export const Filter: React.FC = () => {
  const [filterData, setFilterData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [locale, setLocale] = useState('');
  const [country, setCountry] = useState('');
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');

  const playlistContext = useContext(PlayListContext);

  useEffect(() => {
    (async function getData() {
      await getFilterData().then((res) => setFilterData(res));

      await getFeaturedList().then((res) => {
        playlistContext.dispatch.playlist(res);
      });
    })();
  }, []);

  const handleDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimit(e.target.value);
    console.log(e.target.value);
  };

  const handleOffsetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOffset(e.target.value);
    console.log(e.target.value);
  };

  const renderFilter = (i: any) => {
    const { id, name, values, validation } = i;

    switch (id) {
      case 'locale':
        return (
          <S.FormControl key={id}>
            <Label name="select-locale">{`${name} : `}</Label>
            <Select id="select-locale" value={locale} options={values} onChange={handleLocaleChange} />
          </S.FormControl>
        );
      case 'country':
        return (
          <S.FormControl key={id}>
            <Label name="select-country">{`${name} : `}</Label>
            <Select key={id} value={country} options={values} onChange={handleCountryChange} />
          </S.FormControl>
        );

      case 'timestamp':
        return (
          <S.FormControl key={id}>
            <Label name={id}>{`${name} : `}</Label>
            <DateField key={id} startDate={startDate} onChangeDate={(date) => handleDateChange(date)} />
          </S.FormControl>
        );

      case 'limit':
        return (
          <S.FormControl key={id}>
            <Label name={id}>{`${name} : `}</Label>
            <Input
              key={id}
              id="input-limit"
              type="number"
              validation={validation}
              value={limit}
              onChange={handleLimitChange}
            />
          </S.FormControl>
        );

      case 'offset':
        return (
          <S.FormControl key={id}>
            <Label name={id}>{`${name} : `}</Label>
            <Input key={id} id="input-offset" type="number" value={offset} onChange={handleOffsetChange} />
          </S.FormControl>
        );
      default:
        return false;
    }
  };

  return <>{filterData.map((i) => renderFilter(i))}</>;
};
