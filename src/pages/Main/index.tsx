import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Container, Filters, LogInButton } from "./styles";

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

interface ITimeStamp {
  id: string;
  name: string;
  validation: [
    {
      primitiveType: string;
      entityType: string;
      pattern: string;
    }
  ];
}

interface ILimit {
  id: string;
  name: string;
  validation: [
    {
      primitiveType: string;
      min: number;
      max: number;
    }
  ];
}

interface IOffset {
  id: string;
  name: string;
  validation: [
    {
      primitiveType: string;
    }
  ];
}

const Main: React.FC = () => {
  const [token, setToken] = useState("");
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

    if (window.location.hash) {
      const queryParams = window.location.hash
        .substring(1)
        .split("&")
        .map((item) => {
          const info = item.split("=");
          return info[1];
        });

      if (queryParams.length > 2) {
        const tokenInfo = {
          token: queryParams[0],
          tokenType: queryParams[1],
          expiresIn: queryParams[2],
        };
        console.log(tokenInfo);

        localStorage.setItem("@Spotifood:token", tokenInfo.token);

        setToken(tokenInfo.token);
      } else {
        const errorsInfo = {
          error: queryParams[0],
        };

        console.log(errorsInfo.error);
      }
    }

    if (token) {
      axios
        .get(
          `https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_BR&timestamp=2014-10-23T09%3A00%3A00&limit=10&offset=5`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "@Spotifood:token"
              )}`,
            },
          }
        )
        .then((res) => console.log(res));
    }
  }, [token]);

  const showFilter = useCallback(() => {
    console.table(country);
  }, [country]);

  const logInSpotify = useCallback(() => {
    const clientID = "7779441b6a2042949a197bfcfd94e3fa";
    const redirectUri = "http://localhost:3000/";

    const fullUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}`;

    window.location.href = fullUrl;
  }, []);

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
      <LogInButton onClick={logInSpotify}>Continuar com Spotify</LogInButton>
    </Container>
  );
};

export default Main;
