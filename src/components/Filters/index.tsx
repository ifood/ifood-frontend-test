import React, { useState, HTMLAttributes, useEffect } from "react";
import axios from "axios";

import { Container } from "./styles";
import {
  IFiltersLists,
  ITimeStamp,
  ILimit,
  IOffset,
} from "../../config/interfaces";

interface IFiltersProps {
  handleSearch(value: string): void;
  handleCountry(value: string): void;
  handleLocale(value: string): void;
  handleDateTime(value: string): void;
  handleLimit(value: string): void;
}

const Filters: React.FC<IFiltersProps> = ({
  handleSearch,
  handleCountry,
  handleDateTime,
  handleLimit,
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
  },[]);

  return (
    <Container>
      <input
        type="text"
        onChange={(e) => handleSearch(e.currentTarget.value)}
      />
      <select
        name="country"
        defaultValue="BR"
        id="country"
        onChange={(e) => handleCountry(e.currentTarget.value)}
      >
        {countriesInfo &&
          countriesInfo.values?.map((value) => (
            <option key={value.value} value={value.value}>
              {value.name}
            </option>
          ))}
      </select>
      <input
        type="datetime-local"
        onChange={(e) => handleDateTime(e.currentTarget.value)}
      />
      <input
        type="number"
        defaultValue={5}
        onChange={(e) => handleLimit(e.currentTarget.value)}
        min={5}
        max={500}
        name="count"
        id="count"
      />
    </Container>
  );
};

export default Filters;
