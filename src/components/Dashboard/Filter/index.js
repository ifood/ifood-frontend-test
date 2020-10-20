/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Select from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';

import { Container, Label } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('pt', pt);

export const localeOptions = [
  { value: 'en_AU', label: 'en_AU' },
  { value: 'de_DE', label: 'de_DE' },
  { value: 'pt_BR', label: 'pt_BR' },
  { value: 'fr_FR', label: 'fr_FR' },
  { value: 'en_US', label: 'en_US' },
  { value: 'es_AR', label: 'es_AR' },
];

export const countryOptions = [
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Alemanhã' },
  { value: 'BR', label: 'Brasil' },
  { value: 'PT', label: 'Portugal' },
  { value: 'en_US', label: 'EUA' },
  { value: 'RU', label: 'Rússia' },
];

function Filter() {
  const [isShowingFilter, setIsShowingFilter] = useState(false);
  const [values, setValues] = useState({});
  const [searchValueFocus, setSearchValueFocus] = useState(false);

  const handleInputChange = (event) => {
    event.persist();

    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setValues((prevState) => ({
      ...prevState,
      [name]: value.value,
    }));
  };

  const handleDateTimeChange = (value) => {
    setValues((prevState) => ({
      ...prevState,
      date: value,
    }));
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

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
                onChange={handleInputChange}
                onFocus={() => setSearchValueFocus(true)}
                onBlur={() => setSearchValueFocus(false)}
                value={values.searchValue}
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
              onChange={(value) => handleSelectChange('locale', value)}
            />
            <Select
              name="country"
              className="react-select"
              classNamePrefix="select"
              placeholder="País"
              isSearchable={false}
              options={countryOptions}
              onChange={(value) => handleSelectChange('country', value)}
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
              onChange={(value) =>
                value.target.value <= 60 && handleInputChange(value)
              }
              value={values.limit}
            />
            <input
              name="offset"
              type="number"
              placeholder="Página"
              className="default-input"
              onChange={handleInputChange}
              value={values.offset}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Filter;
