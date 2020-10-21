/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaFilter, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Select from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import useSkipFirstRender from '../../../utils/useSkipFirstRender';

import { Container, Label } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

function Filter({
  playlists,
  setPlaylists,
  setFilters,
  getPlaylistsService,
  filtersLabelValue,
}) {
  const [localeOptions, setLocaleOptions] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [playlistsInitial, setPlaylistsInitial] = useState([]);
  const [values, setValues] = useState({});
  const [isShowingFilter, setIsShowingFilter] = useState(false);
  const [searchValueFocus, setSearchValueFocus] = useState(false);

  const handleSearchInputChange = (event) => {
    event.persist();

    const searchValue = event.target.value;

    if (searchValue.length) {
      const filteredItems = playlistsInitial.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
      );

      setValues((prevState) => ({ ...prevState, searchValue }));
      setPlaylists(filteredItems);
    } else {
      setPlaylists(playlistsInitial);
      setValues((prevState) => ({ ...prevState, searchValue: '' }));
    }
  };

  const handleInputChange = (name, value) => {
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDateTimeChange = (value) => {
    setValues((prevState) => ({ ...prevState, date: value }));
  };

  useSkipFirstRender(() => {
    const { searchValue, locale, country, date, limit, offset } = values;

    setFilters({
      searchValue,
      locale: locale || 'pt_BR',
      country: country || 'BR',
      timestamp: (date && date.toISOString()) || new Date().toISOString(),
      limit: limit || 12,
      offset: offset || 0,
    });
    getPlaylistsService();
  }, [values]);

  useEffect(() => {
    if (!playlistsInitial.length) {
      setPlaylistsInitial(playlists);
    }

    if (filtersLabelValue) {
      let locales = filtersLabelValue.find((value) => value.id === 'locale');
      let countries = filtersLabelValue.find((value) => value.id === 'country');

      locales = locales.values.map((item) => ({ ...item, label: item.name }));
      countries = countries.values.map((item) => {
        let { value } = item;
        let label = item.name;

        if (value === 'en_US') {
          value = 'US';
          label = 'Estados Unidos';
        }

        return { value, label };
      });

      setLocaleOptions(locales);
      setCountryOptions(countries);
    }
  }, [playlists, playlistsInitial, filtersLabelValue]);

  return (
    <Container showFilter={isShowingFilter}>
      <div className="filter-wrapper">
        <div className="filter-content">
          <div className="filter-search-container">
            <Label focus={searchValueFocus}>
              <FaSearch size={16} className="fa fa-search" />
              <input
                name="searchValue"
                type="text"
                placeholder="Filtrar"
                onChange={handleSearchInputChange}
                onFocus={() => setSearchValueFocus(true)}
                onBlur={() => setSearchValueFocus(false)}
              />
            </Label>
            <button
              type="button"
              className="filter-button"
              onClick={() => setIsShowingFilter(!isShowingFilter)}
            >
              <FaFilter size={16} className="fa fa-filter" />
              {isShowingFilter ? (
                <FaAngleUp size={18} className="fa fa-angle-down" />
              ) : (
                <FaAngleDown size={18} className="fa fa-angle-down" />
              )}
            </button>
          </div>
          <div className="filter-items">
            <Select
              name="locale"
              className="react-select"
              classNamePrefix="select"
              placeholder="Localidade"
              isSearchable={false}
              options={localeOptions}
              onChange={(value) => handleInputChange('locale', value.value)}
            />
            <Select
              name="country"
              className="react-select"
              classNamePrefix="select"
              placeholder="País"
              isSearchable={false}
              options={countryOptions}
              onChange={(value) => handleInputChange('country', value.value)}
            />
            <DatePicker
              showTimeInput
              locale="pt"
              timeInputLabel="Horário:"
              timeFormat="p"
              dateFormat="Pp"
              placeholderText="Dia e horário"
              className="default-input"
              selected={values.date}
              onChange={(date) => handleDateTimeChange(date)}
            />
            <input
              name="limit"
              type="number"
              placeholder="Itens por página"
              className="default-input"
              onChange={(e) =>
                e.target.value <= 60 &&
                handleInputChange(e.target.name, e.target.value)
              }
              value={values.limit}
            />
            <input
              name="offset"
              type="number"
              placeholder="Página"
              className="default-input"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              value={values.offset}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

Filter.defaultProps = {
  filtersLabelValue: [],
};

Filter.propTypes = {
  filtersLabelValue: PropTypes.arrayOf(PropTypes.any),
  playlists: PropTypes.arrayOf(PropTypes.any).isRequired,
  setPlaylists: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  getPlaylistsService: PropTypes.func.isRequired,
};

export default Filter;
