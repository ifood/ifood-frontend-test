import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Container, Filters, LogInButton, Repositories } from "./styles";

import { IFiltersLists, ILimit, ISpotifyResponse, IOffset, ITimeStamp } from "../../config/interfaces";

const Main: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [locale, setLocale] = useState<IFiltersLists>({} as IFiltersLists);
  const [countries, setCountry] = useState<IFiltersLists>({} as IFiltersLists);
  const [timestamp, setTimestamp] = useState<ITimeStamp>({} as ITimeStamp);
  const [limit, setLimit] = useState<ILimit>({} as ILimit);
  const [offset, setOffset] = useState<IOffset>({} as IOffset);
  const [playlists, setPlaylists] = useState<ISpotifyResponse>(
    {} as ISpotifyResponse
  );

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

    setToken(localStorage.getItem("@Spotifood:token"));

    if (!token && window.location.hash) {
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
        .then((res) => {
          console.log(res)
          setPlaylists(res.data)
        });
    }
  }, [token]);

  const showFilter = useCallback((date: any) => {
    console.log(date);
  }, []);

  const logInSpotify = useCallback(() => {
    const clientID = "7779441b6a2042949a197bfcfd94e3fa";
    const redirectUri = "http://localhost:3000/";

    const fullUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}`;

    window.location.href = fullUrl;
  }, []);

  return (
    <Container>
      <h1>Spotifood</h1>

      {token && (
        <>
          <Filters>
            <input type="text" />
            <select name="country" defaultValue="BR"  id="country">
              {countries &&
                countries.values?.map((value) => (
                  <option key={value.value} value={value.value}>
                    {value.name}
                  </option>
                ))}
            </select>
            <input type="datetime-local" onChange={showFilter} />
            <input type="number" defaultValue={5} min={5} max={500} name="count" id="count" />
          </Filters>

          {playlists.playlists && (
            <Repositories>
              {playlists.playlists.items.map((playlist) => (
                <a href={playlist.external_urls.spotify} target="_blank" key={playlist.id} rel="noopener noreferrer">
                  <img src={playlist.images[0].url} alt={playlist.name} />
                  <div>
                    <strong>{playlist.name}</strong>
                    <p>{playlist.description}</p>
                  </div>
                </a>
              ))}
            </Repositories>
          )}
        </>
      )}

      {!token && (
        <LogInButton onClick={logInSpotify}>Continuar com Spotify</LogInButton>
      )}
    </Container>
  );
};

export default Main;
