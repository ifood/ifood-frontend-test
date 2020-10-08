import React, { useEffect, useState, useContext } from 'react'; //eslint-disable-line
import { Redirect } from 'react-router-dom';

import { getFilterData } from 'services/api-mocky';
import { getFeaturedList } from 'services/api-spotify';

import { DateField } from 'components/date-field';
import { Select } from 'components/select';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { Wrapper } from 'components/wrapper';

import { filterPlaylistByName } from 'common/helpers';
import { PlayListContext } from 'store/play-list-store';

import * as S from './styles';

export const Filter: React.FC = () => {
  const [filterName, setFilterName] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [locale, setLocale] = useState('');
  const [country, setCountry] = useState('');
  const [limit, setLimit] = useState('');
  const [offset, setOffset] = useState('');
  const [params, setParams] = useState({});
  const [hasError, setError] = useState(false);

  const playlistContext = useContext(PlayListContext);

  useEffect(() => {
    (async function getData() {
      try {
        await getFilterData().then((res) => setFilterData(res));

        await getFeaturedList().then((res) => {
          playlistContext.dispatch.playlist(res);
        });
      } catch (err) {
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      getFeaturedList(params).then((res) => {
        playlistContext.dispatch.playlist(res);
      });

      const interval = setInterval(() => {
        getFeaturedList(params).then((res) => {
          playlistContext.dispatch.playlist(res);
        });
      }, 10000);
      return () => clearInterval(interval);
    } catch (err) {
      setError(true);
    }
  }, [params]);

  useEffect(() => {
    const filteredItems = filterPlaylistByName(filterName, playlistContext.state.playlist);

    console.log(filteredItems);

    if (filterName && !filteredItems.length) {
      playlistContext.dispatch.emptyFilterList(true);
    } else {
      playlistContext.dispatch.emptyFilterList(false);
    }

    playlistContext.dispatch.filteredList(filteredItems);
  }, [filterName]);

  const handleLocaleChange = async (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    setLocale(e.target.value);
    updateParams(id, e.target.value);
  };

  const handleCountryChange = async (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    setCountry(e.target.value);
    updateParams(id, e.target.value);
  };

  const handleDateChange = (date: Date, id: string) => {
    setStartDate(date);
    updateParams(id, date.toISOString());
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setLimit(e.target.value);
    updateParams(id, e.target.value);
  };

  const handleOffsetChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setOffset(e.target.value);
    updateParams(id, e.target.value);
  };

  const handleFilterByName = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setFilterName(e.target.value);
  };

  const updateParams = (id: string, value: string) => {
    setParams((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const renderFilter = (i: any) => {
    const { id, name, values, validation } = i;

    switch (id) {
      case 'locale':
        return (
          <S.FormControl key={id}>
            <Label name="select-locale">{`${name}`}</Label>
            <Select id="select-locale" value={locale} options={values} onChange={(e) => handleLocaleChange(e, id)} />
          </S.FormControl>
        );
      case 'country':
        return (
          <S.FormControl key={id}>
            <Label name="select-country">{`${name}`}</Label>
            <Select key={id} value={country} options={values} onChange={(e) => handleCountryChange(e, id)} />
          </S.FormControl>
        );

      case 'timestamp':
        return (
          <S.FormControl key={id}>
            <Label name={id}>{`${name}`}</Label>
            <DateField key={id} startDate={startDate} onChangeDate={(date) => handleDateChange(date, id)} />
          </S.FormControl>
        );

      case 'limit':
        return (
          <S.FormControl key={id}>
            <Label name={id}>{`${name}`}</Label>
            <Input
              key={id}
              id="input-limit"
              type="number"
              placeholder={name}
              validation={validation}
              value={limit}
              onChange={(e) => handleLimitChange(e, id)}
              heigth="30px"
            />
          </S.FormControl>
        );

      case 'offset':
        return (
          <S.FormControl key={id}>
            <Label name={id}>{`${name}`}</Label>
            <Input
              key={id}
              id="input-offset"
              placeholder={name}
              type="number"
              value={offset}
              onChange={(e) => handleOffsetChange(e, id)}
              heigth="30"
            />
          </S.FormControl>
        );
      default:
        return false;
    }
  };

  if (hasError) {
    return <Redirect to="/error" />;
  }
  return (
    <Wrapper height="auto">
      <S.Card>{filterData.map((i) => renderFilter(i))}</S.Card>

      <S.InputWrapper>
        <Input
          id="input-filter-name"
          value={filterName}
          placeholder="Procure pela sua playlist favorita..."
          onChange={(e) => handleFilterByName(e, 'input-filter-name')}
        />
      </S.InputWrapper>
    </Wrapper>
  );
};
