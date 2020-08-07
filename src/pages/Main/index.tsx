import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Container, Filters } from "./styles";

interface IFiltersLists {
  id: string;
  name: string;
  values: [
    {
      value: string;
      name: string;
    }
  ];
}

interface ITimeStamp{
      id: string;
      name: string;
      validation: [
        {
          primitiveType: string;
          entityType: string;
          pattern: string;
        }
      ]
    }

    interface ILimit{
      id: string;
      name: string;
      validation: [
        {
          primitiveType: string;
          min: number;
          max: number;
        }
      ]
    }

    interface IOffset{
      id: string;
      name: string;
      validation: [
        {
          primitiveType: string;
        }
      ]
    }

const Main: React.FC = () => {
  const [locale, setLocale] = useState<IFiltersLists>({} as IFiltersLists);
  const [country, setCountry] = useState<IFiltersLists>({} as IFiltersLists);
  const [timestamp, setTimestamp] = useState<ITimeStamp>({} as ITimeStamp);
  const [limit, setLimit] = useState<ILimit>({} as ILimit);
  const [offset, setOffset] = useState<IOffset>({} as IOffset);

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5a25fade2e0000213aa90776")
      .then((response) => {
        setLocale(response.data.filters[0]);
        setCountry(response.data.filters[1]);
        setTimestamp(response.data.filters[2]);
        setLimit(response.data.filters[3]);
        setOffset(response.data.filters[4]);
      });
  }, []);

  const showFilter = useCallback(() => {
    console.table(country);
  }, [country]);

  return (
    <Container>
      <h1>Spotifood</h1>
      <Filters>
        <input type="text" />
        <select name="country" id="country">
          {country &&
            country.values?.map((value) => (
              <option key={value.value} value={value.value}>
                {value.name}
              </option>
            ))}
        </select>
        <input type="datetime-local" />
        <select name="count" id="count"></select>
        <button onClick={showFilter}>mostrar</button>
      </Filters>
    </Container>
  );
};

export default Main;
