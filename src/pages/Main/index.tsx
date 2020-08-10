import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Container, LogInButton, Repositories } from "./styles";

import {
  IFiltersLists,
  ILimit,
  ISpotifyResponse,
  IOffset,
  ITimeStamp,
} from "../../config/interfaces";
import Filters from "../../components/Filters";

const Main: React.FC = () => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("@Spotifood:token")
  );
  const [locale, setLocale] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string>("");
  const [limit, setLimit] = useState<string>("");
  const [offset, setOffset] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [playlists, setPlaylists] = useState<ISpotifyResponse>(
    {} as ISpotifyResponse
  );

  useEffect(() => {
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
        window.location.hash = ''
      } else {
        const errorsInfo = {
          error: queryParams[0],
          state: queryParams[1],
        };

        console.log(errorsInfo.error);
        console.log(errorsInfo.state);
      }
    }

    if (token) {
        axios
          .get(
            `https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=en_AU&timestamp=2014-10-23T09%3A00%3A00&limit=10&offset=5`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem(
                  "@Spotifood:token"
                )}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            setPlaylists(res.data);
          }).catch(error => {
            console.log('error', error)
            localStorage.removeItem('@Spotifood:token')
            setToken(null)
          });
    }
  }, [token]);

  useEffect(() => {
    console.log(search);
    console.log(country);
    console.log(timestamp);
    console.log(limit);
    console.log(locale);
  }, [search, country, timestamp, limit, locale]);

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
          <Filters
            handleSearch={setSearch}
            handleCountry={setCountry}
            handleDateTime={setTimestamp}
            handleLimit={setLimit}
            handleLocale={setLocale}
          />

          {playlists.playlists && (
            <Repositories>
              {playlists.playlists.items.map((playlist) => (
                <a
                  href={playlist.external_urls.spotify}
                  target="_blank"
                  key={playlist.id}
                  rel="noopener noreferrer"
                >
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
