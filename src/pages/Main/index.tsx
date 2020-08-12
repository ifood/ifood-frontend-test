import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import moment from "moment";

import { Container, Content } from "./styles";

import {
  ISpotifyResponse,
  IPlaylists,
  ISpotifyRequest,
  ISpotifyUser,
} from "../../config/interfaces";
import Filters from "../../components/Filters";
import Playlists from "../../components/Playlists";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useToast } from "../../hooks/toast";
import { requestSpotifyPlaylist, requestSpotifyUser } from "../../services/spotifyAPI";

const Main: React.FC = () => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("@Spotifood:token")
  );
  const [locale, setLocale] = useState<string>("pt_BR");
  const [country, setCountry] = useState<string>("BR");
  const [time, setTime] = useState<string>(() => {
    const time = moment().format("hh:mm:ss");
    return time;
  });
  const [date, setDate] = useState<string>(() => {
    const date = moment().format().split("T")[0];
    return date;
  });
  const [limit, setLimit] = useState<number>(5);
  const [offset, setOffset] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [spotifyResponse, setSpotifyResponse] = useState<ISpotifyResponse>(
    {} as ISpotifyResponse
  );
  const [spotifyUser, setSpotifyUser] = useState<ISpotifyUser | null>(null);
  const [renderPlaylists, setRenderPlaylists] = useState<IPlaylists[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const { addToast } = useToast();

  //first render
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
      requestSpotifyPlaylist({
        country,
        date,
        time,
        limit,
        offset,
        locale,
        token,
      })
        .then((res) => {
          setSpotifyResponse(res);
          setRenderPlaylists(res.playlists.items);
        })
        .catch((error) => {
          handleErrors();
          logOut();
        });

      requestSpotifyUser(token)
        .then((response) => {
          setSpotifyUser(response);
        })
        .catch(() => {
          handleErrors();
          logOut();
        });

      setInterval(() => {
        setRefresh((state) => !state);
      }, 30000);
    }
  }, []);


  //rerender when refresh interval comes
  useEffect(() => {
    if (token) {
      requestSpotifyPlaylist({
        country,
        date,
        limit,
        locale,
        offset,
        time: moment().format("hh:mm:ss"),
        token,
      })
        .then((response) => {
          setSpotifyResponse(response);
          setRenderPlaylists(response.playlists.items);
        })
        .catch(() => {
          handleErrors()
        });
    }
  }, [refresh]);

  //rerender when any of the filter inputs are changed
  useEffect(() => {
    async function request() {
      if (token) {
        try {
          const response = await requestSpotifyPlaylist({
            country,
            time,
            date,
            limit,
            offset,
            locale,
            token,
          });
          setSpotifyResponse(response);
          setRenderPlaylists(response.playlists.items);
        } catch (error) {
          handleErrors()
        }
      }
    }
    request();
  }, [country, time, date, limit, locale, token]);

  //rerender at any input on the search filter
  useEffect(() => {
    if (spotifyResponse.playlists) {
      setRenderPlaylists(
        spotifyResponse.playlists.items.filter((playlist) =>
          playlist.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);


  

  // handle the load more button
  const handleLoadMore = useCallback(async () => {
    console.log(spotifyResponse.playlists.next);
    console.log(spotifyResponse.playlists.total);

    try {
      if (spotifyResponse.playlists) {
        const response = await axios.get(spotifyResponse.playlists.next, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const parsedResponse: ISpotifyResponse = response.data;

        console.log(parsedResponse.playlists.items);

        setSpotifyResponse((state) => {
          const newState: ISpotifyResponse = {
            message: state.message,
            playlists: {
              ...parsedResponse.playlists,
              items: state.playlists.items.concat(
                parsedResponse.playlists.items
              ),
            },
          };
          return newState;
        });

        setRenderPlaylists((state) =>
          state.concat(parsedResponse.playlists.items)
        );
      }
    } catch (error) {
      handleErrors()
    }
  }, [spotifyResponse, token ]);

  //handle the logIn button
  const logInSpotify = useCallback(() => {
    const clientID = "7779441b6a2042949a197bfcfd94e3fa";
    const redirectUri = "http://localhost:3000/";

    const fullUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}`;

    window.location.href = fullUrl;
  }, []);

  // handler logoffs
  const logOut = useCallback(() => {
    localStorage.removeItem("@Spotifood:token");
    setToken(null);
    setSpotifyUser(null);
    window.location.reload();
  }, []);

  // handler errors calling the toasts
  const handleErrors = useCallback(() => {
    addToast({
      type: "error",
      title: "Encontramos um erro",
      description: 'Ops... algo deu errado, por favor, tente atualizar a página.'
    })
  },[addToast])

  return (
    <Container>
      <Header user={spotifyUser} logOut={logOut} className="appear-from-top">
        <h1>Spotifood</h1>

        {token && spotifyUser && (
          <div className="user-info">
            <img
              src={spotifyUser.images[0].url}
              alt={spotifyUser.display_name}
            />
            <div>
              <p>{spotifyUser.display_name}</p>
              <span onClick={logOut}>sair</span>
            </div>
          </div>
        )}
      </Header>

      <Content className="appear-from-top">
        {
          <h1>
            Confira as Playlists que mais fazem sucesso no Spotify em diversos
            países!
          </h1>
        }
      </Content>

      {token && (
        <>
          <Filters
            className="appear-from-top"
            defaultTime={{
              time,
              setTime,
            }}
            defaultDate={{
              date,
              setDate,
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
              {!(
                renderPlaylists.length === spotifyResponse.playlists.total
              ) && (
                <Button className="appear-from-top" onClick={handleLoadMore}>
                  Carregar Mais
                </Button>
              )}
            </>
          )}
        </>
      )}

      {!token && (
        <>
          <p className="subtitle appear-from-top">
            Acesse o Spotifood com sua conta Spotify.
          </p>
          <Button className="appear-from-top" onClick={logInSpotify}>
            Continuar com Spotify
          </Button>
        </>
      )}
    </Container>
  );
};

export default Main;
