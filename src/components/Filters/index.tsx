import React, { useState, HTMLAttributes, useEffect, useCallback } from "react";
import axios from "axios";

import { Container, Input, Select } from "./styles";
import {
  IFiltersLists,
  ITimeStamp,
  ILimit,
  IOffset,
} from "../../config/interfaces";

interface IFiltersProps extends  HTMLAttributes<HTMLDivElement>{
  defaultSearch: {
    search: string;
    setSearch(value: string): void;
  };
  defaultLocale: {
    locale: string;
    setLocale(value: string): void;
  };
  defaultTime: {
    timestamp: string;
    setDateTime(value: string): void;
  };
  defaultCountry: {
    country: string;
    setCountry(value: string): void;
  };
  defaultLimit: {
    limit: number;
    setLimit(value: number): void;
  };
  defaultOffset: {
    offset: number;
    setOffset(value: number): void;
  }
}

const Filters: React.FC<IFiltersProps> = ({
  defaultTime,
  defaultCountry,
  defaultLimit,
  defaultLocale,
  defaultOffset,
  defaultSearch,
  ...restProps
}) => {
  const [localeInfo, setLocaleInfo] = useState<IFiltersLists>(
    {} as IFiltersLists
  );
  const [countriesInfo, setCountryInfo] = useState<IFiltersLists>(
    {} as IFiltersLists
  );
  const [timestampInfo, setTimestampInfo] = useState<ITimeStamp>(
    {} as ITimeStamp
  );
  const [limitInfo, setLimitInfo] = useState<ILimit>({} as ILimit);
  const [offsetInfo, setOffsetInfo] = useState<IOffset>({} as IOffset);
  

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5a25fade2e0000213aa90776")
      .then((response) => {
        setLocaleInfo(response.data.filters[0]);
        setCountryInfo(response.data.filters[1]);
        setTimestampInfo(response.data.filters[2]);
        setLimitInfo(response.data.filters[3]);
        setOffsetInfo(response.data.filters[4]);
      });
  }, []);

  const handleDateTime = useCallback((date: string) => {
    console.log(date)
    const parsedDate = new Date(date).toISOString()
    defaultTime.setDateTime(parsedDate)
  },[])

  const handleCountry = useCallback((country: string) => {
    if(country === 'en_US') {
      defaultCountry.setCountry('US')
      defaultLocale.setLocale('en_US')
    } else {
      defaultCountry.setCountry(country)
    }
  },[])

  return (
    <Container {...restProps}>
      <Input
      placeholder="Filtrar"
        type="text"
        value={defaultSearch.search}
        onChange={(e) => defaultSearch.setSearch(e.currentTarget.value)}
      />
      <Select
        name="country"
        value={defaultCountry.country}
        id="country"
        onChange={(e) => handleCountry(e.currentTarget.value)}
      >
        <option key="default" value={defaultCountry.country}>
          País
        </option>
        {countriesInfo &&
          countriesInfo.values?.map((value) => (
            <option key={value.value} value={value.value}>
              {value.name}
            </option>
          ))}
      </Select>
      <Select
        name="Locale"
        value={defaultLocale.locale}
        id="country"
        onChange={(e) => defaultLocale.setLocale(e.currentTarget.value)}
      >
        <option key="default" value={defaultLocale.locale}>
          Idioma
        </option>
        {localeInfo &&
          localeInfo.values?.map((value) => (
            <option key={value.value} value={value.value}>
              {value.name}
            </option>
          ))}
      </Select>
      <Input
        type="datetime-local"
        onChange={(e) => defaultTime.setDateTime(e.currentTarget.value)}
        value={defaultTime.timestamp}
        max={Date.now().toLocaleString()}
      />
      <Input
        type="number"
        value={defaultLimit.limit}
        onChange={(e) => defaultLimit.setLimit(Number.parseInt(e.currentTarget.value))}
        min={1}
        max={500}
        name="count"
        id="count"
      />
    </Container>
  );
};

export default Filters;
