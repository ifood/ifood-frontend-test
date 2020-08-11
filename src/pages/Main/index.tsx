import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";

import { Container, Content, Header } from "./styles";

import {
  ISpotifyResponse,
  IPlaylists,
  ISpotifyRequest,
} from "../../config/interfaces";
import Filters from "../../components/Filters";
import Playlists from "../../components/Playlists";
import Button from "../../components/Button";

const Main: React.FC = () => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("@Spotifood:token")
  );
  const [locale, setLocale] = useState<string>("pt_BR");
  const [country, setCountry] = useState<string>("BR");
  const [timestamp, setTimestamp] = useState<string>(() => {
    const UTCOffset = new Date().getTimezoneOffset();
    const dateNow = Date.now() - UTCOffset;
    const date = new Date(dateNow);
    return date.toISOString();
  });
  const [limit, setLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [spotifyResponse, setSpotifyResponse] = useState<ISpotifyResponse>(
    {} as ISpotifyResponse
  );
  const [renderPlaylists, setRenderPlaylists] = useState<IPlaylists[]>([]);

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
        window.location.hash = "";
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
      console.log(timestamp);
      requestSpotify({ country, timestamp, limit, offset, locale, token })
        .then((res) => {
          console.log(res);
          setSpotifyResponse(res);
          setRenderPlaylists(res.playlists.items);
        })
        .catch((error) => {
          console.log("error", error);
          localStorage.removeItem("@Spotifood:token");
          setToken(null);
        });
    }
  }, [token, timestamp]);

  useEffect(() => {
    if (token)
      requestSpotify({ country, timestamp, limit, offset, locale, token }).then(
        (res) => {
          console.log(res);
          setSpotifyResponse(res);
          setRenderPlaylists(res.playlists.items);
        }
      );
  }, [country, timestamp, limit, locale]);

  useEffect(() => {
    if (spotifyResponse.playlists) {
      setRenderPlaylists(
        spotifyResponse.playlists.items.filter((playlist) =>
          playlist.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  const showFilter = useCallback((date: any) => {
    console.log(date);
  }, []);

  const requestSpotify = useCallback(async (data: ISpotifyRequest): Promise<
    ISpotifyResponse
  > => {
    const { country, limit, locale, offset, timestamp, token } = data;
    const parsedDate = new Date(timestamp).toISOString()
    const encodedTimeStamp = encodeURI(parsedDate);
    const uriOffset = offset.toString();
    const uriLimit = limit.toString();

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/featured-playlists?country=${country}&locale=${locale}&timestamp=${encodedTimeStamp}&limit=${uriLimit}&offset=${uriOffset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      const parsedResponse: ISpotifyResponse = response.data;
      return parsedResponse;
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const handleLoadMore = useCallback(async () => {
    console.log(spotifyResponse.playlists.next);
    console.log(spotifyResponse.playlists.total);

    try {
      if (token && spotifyResponse.playlists) {
        const response = await axios.get(spotifyResponse.playlists.next, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const parsedResponse: ISpotifyResponse = response.data;

        console.log(parsedResponse.playlists.items);
        const newRenderPlaylist = renderPlaylists.concat(
          parsedResponse.playlists.items
        );
        console.log(newRenderPlaylist);
      }
    } catch (error) {
      console.log(error);
    }
  }, [spotifyResponse]);

  const logInSpotify = useCallback(() => {
    const clientID = "7779441b6a2042949a197bfcfd94e3fa";
    const redirectUri = "http://localhost:3000/";

    const fullUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}`;

    window.location.href = fullUrl;
  }, []);

  return (
    <Container>
      <Header>
        <h1>Spotifood</h1>
      </Header>

      <Content className="appear-from-top">
        <h1>
          Confira as Playlists que mais fazem sucesso no Spotify em diversos
          países!
        </h1>
      </Content>
      
      {token && (
        <>
          <Filters
          className="appear-from-top"
            defaultTime={{
              timestamp,
              setDateTime: setTimestamp,
            }}
            defaultCountry={{
              country,
              setCountry,
            }}
            defaultLimit={{
              limit,
              setLimit,
            }}
            defaultLocale={{
              locale,
              setLocale,
            }}
            defaultOffset={{
              offset,
              setOffset,
            }}
            defaultSearch={{
              search,
              setSearch,
            }}
          />

          {spotifyResponse.playlists && (
            <>
              <Playlists listItems={renderPlaylists} />
              <Button className="appear-from-top" onClick={handleLoadMore}>Carregar Mais</Button>
            </>
          )}
        </>
      )}

      {!token && (
        <>
          <p className="subtitle appear-from-top">Acesse o Spotifood com sua conta Spotify.</p>
          <Button className="appear-from-top" onClick={logInSpotify}>Continuar com Spotify</Button>
        </>
      )}
    </Container>
  );
};

export default Main;
