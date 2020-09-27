import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import Select from "react-select";
import DatePicker from "react-datepicker";

import { useFilter } from '../../../Hooks/playlistsHook';

import {
  IFilter,
  IFilterItem,
  getFilters,
} from '../../../Services/filterService';

import { Form, FormItem } from "./styles";

const PlaylistFilter: React.FC = () => {
  const [locale, setLocale] = useState<IFilter>({} as IFilter);
  const [country, setCountry] = useState<IFilter>({} as IFilter);
  const [dateTime, setDateTime] = useState<IFilter>({} as IFilter);
  const [limit, setLimit] = useState<IFilter>({} as IFilter);
  const [offset, setOffset] = useState<IFilter>({} as IFilter);

  const [selectedLocale, setSelectedLocale] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [selectedLimit, setSelectedLimit] = useState("");
  const [selectedOffset, setSelectedOffset] = useState("");

  const { updateFilter } = useFilter();

  useEffect(() => {
    getFilters().then((filters) => {
      filters.forEach((filter) => {
        if (filter.id === "locale") {
          setLocale(filter);
        } else if (filter.id === "country") {
          setCountry(filter);
        } else if (filter.id === "timestamp") {
          setDateTime(filter);
        } else if (filter.id === "limit") {
          setLimit(filter);
        } else if (filter.id === "offset") {
          setOffset(filter);
        }
      });
    });
  }, []);

  function handleLimit(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);

    if (!value) {
      setSelectedLimit("");
    }

    if (
      limit.validation &&
      (value < Number(limit.validation.min) ||
        value > Number(limit.validation?.max))
    ) {
      return;
    }

    setSelectedLimit(value.toString());
  }

  function handlePlaylistFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    updateFilter({
      locale: selectedLocale,
      country: selectedCountry,
      timestamp: selectedDateTime,
      limit: selectedLimit,
      offset: selectedOffset,
    });
  }

  return (
    <Form onSubmit={handlePlaylistFilter}>
      <FormItem>
        <Select
          classNamePrefix="react-select"
          placeholder={locale.name}
          options={locale.values}
          onChange={(e) => setSelectedLocale((e as IFilterItem)?.name)}
        />
      </FormItem>
      <FormItem>
        <Select
          classNamePrefix="react-select"
          placeholder={country.name}
          options={country.values}
          onChange={(e) => setSelectedCountry((e as IFilterItem)?.name)}
        />
      </FormItem>
      <FormItem>
        <DatePicker
          showTimeInput
          name={dateTime.id}
          placeholderText={dateTime.name}
          selected={selectedDateTime}
          dateFormat="yyyy/MM/dd HH:mm"
          timeFormat="HH:mm"
          onChange={(date) => setSelectedDateTime(date as Date)}
        />
      </FormItem>
      <FormItem>
        <input
          name={limit.id}
          placeholder={limit.name}
          value={selectedLimit}
          onChange={handleLimit}
          type="number"
        />
      </FormItem>
      <FormItem>
        <input
          name={offset.id}
          placeholder={offset.name}
          value={selectedOffset}
          onChange={(e) => setSelectedOffset(e.target.value)}
          type="number"
        />
      </FormItem>
      <button type="submit">Filtrar</button>
    </Form>
  );
};

export default PlaylistFilter;
