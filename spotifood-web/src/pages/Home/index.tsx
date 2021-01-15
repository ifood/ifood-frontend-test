import React, { useEffect, useState } from "react";
import { Container, Content } from "../../styles/pages/home";

//components
import AsideLeft from "../../components/AsideLeft";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

//icons
import { FiChevronRight, FiChevronLeft, FiSearch } from "react-icons/fi";
//service
import { api, apiMocky } from "../../service/apiSpotify";

interface User {
  id: number;
  display_name: string;
  email: string;
}

interface PreventPlaylist {
  name: string;
  description: string;
  tracks: number;
  url: string;
}

interface Playlist {
  playlists: {
    items: Array<{
      id: number;
      name: string;
      description: string;
      tracks: {
        total: number;
      };
      images: Array<{ url: string }>;
    }>;

    limit: number;
    offset: number;
    previous: string;
    total: number;
  };
}

interface Country {
  id: string;
  name: string;
  values: Array<{
    value: string;
    name: string;
  }>;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [load, setLoad] = useState(true);
  const [playlist, setPlaylist] = useState<Playlist>({} as Playlist);
  const [preventPlaylist, setPreventPlaylist] = useState<PreventPlaylist>();
  const [selectCountry, setSelectCountry] = useState<Country>();
  const [country, setCountry] = useState("BR");

  useEffect(() => {
    //load token e validação
    async function validateToken() {
      const accessToken = localStorage.getItem("@IFood:token");
      const refreshToken = localStorage.getItem("@IFood:refreshToken");
      const user = localStorage.getItem("@IFood:user");

      if (accessToken && user && refreshToken) {
        setUser(JSON.parse(user));
        loadMusic();
      } else {
        api.get("/token").then((resp) => {
          const { accessToken, refreshToken, user } = resp.data;
          setUser(user);
          localStorage.setItem("@IFood:token", accessToken);
          localStorage.setItem("@IFood:refreshToken", refreshToken);
          localStorage.setItem("@IFood:user", JSON.stringify(user));
          loadMusic();
        });
      }
    }
    //load Music
    async function loadMusic() {
      const accessToken = localStorage.getItem("@IFood:token");
      api
        .get("/playlist", {
          headers: { Authorization: accessToken },
          params: {
            country: "BR",
            locale: "pt_BR",
            timestamp: "2020-10-24T07:00:00",
            limit: "6",
            offset: "0",
          },
        })
        .then((resp) => {
          if (resp.data === 401) {
            handleClearToken();
            window.location.replace("http://localhost:8888/login");
          }
          setPlaylist(resp.data);
          setLoad(false);
        });
    }

    async function loadMockyApi() {
      apiMocky.get("").then((resp) => {
        setSelectCountry(resp.data.filters[1]);
      });
    }

    validateToken();
    loadMockyApi();
  }, []);

  //Clear Token
  function handleClearToken() {
    localStorage.removeItem("@IFood:token");
    localStorage.removeItem("@IFood:refreshToken");
    localStorage.removeItem("@IFood:user");
  }
  // Play List to Left
  async function handleLeftPlaylist() {
    if (playlist.playlists.offset - playlist.playlists.limit < 0) {
    } else {
      const accessToken = localStorage.getItem("@IFood:token");
      await api
        .get("/playlist", {
          headers: { Authorization: accessToken },
          params: {
            country: country === "en_US" ? "US" : country,
            locale: "pt_BR",
            timestamp: "2020-10-24T07:00:00",
            limit: playlist?.playlists.limit,
            offset: playlist.playlists.offset - playlist.playlists.limit,
          },
        })
        .then((resp) => {
          if (resp.data === 401) {
            handleClearToken();
            window.location.replace("http://localhost:8888/login");
          }
          setPlaylist(resp.data);
        });
    }
  }
  // Play List to Right
  async function handleRightPlaylist() {
    if (
      playlist.playlists.offset + playlist.playlists.limit ===
        playlist.playlists.total ||
      playlist.playlists.offset + playlist.playlists.limit >
        playlist.playlists.total
    ) {
    } else {
      const accessToken = localStorage.getItem("@IFood:token");
      await api
        .get("/playlist", {
          headers: { Authorization: accessToken },
          params: {
            country: country === "en_US" ? "US" : country,
            locale: "pt_BR",
            timestamp: "2020-10-24T07:00:00",
            limit: playlist?.playlists.limit,
            offset: playlist.playlists.offset + playlist.playlists.limit,
          },
        })
        .then((resp) => {
          if (resp.data === 401) {
            handleClearToken();
            window.location.replace("http://localhost:8888/login");
          }
          setPlaylist(resp.data);
        });
    }
  }

  //prevent Playlist
  async function handlePreventPlaylist(playlist: any) {
    setPreventPlaylist({
      name: playlist.name,
      description: playlist.description,
      tracks: playlist.tracks.total,
      url: playlist.images[0].url,
    });
  }

  async function handleSelectCountry() {
    const accessToken = localStorage.getItem("@IFood:token");
    api
      .get("/playlist", {
        headers: { Authorization: accessToken },
        params: {
          country: country === "en_US" ? "US" : country,
          locale: "pt_BR",
          timestamp: "2020-10-24T07:00:00",
          limit: "5",
          offset: "0",
        },
      })
      .then((resp) => {
        if (resp.data === 401) {
          handleClearToken();
          window.location.replace("http://localhost:8888/login");
        }
        setPlaylist(resp.data);
      });
  }

  return (
    <>
      <Container>
        <AsideLeft />
        <Content>
          <Header preventPlaylist={preventPlaylist} user={user} />
          <div className="seachMusic">
            <select
              className="seachSelect"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              {selectCountry?.values.map((resp) => (
                <option key={resp.name} value={resp.value}>
                  {resp.name}
                </option>
              ))}
            </select>
            <button onClick={handleSelectCountry}>
              <FiSearch />
            </button>
          </div>
          {load ? (
            <h2 className="loading">Loading...</h2>
          ) : (
            <div className="List">
              <div className="ListLeft">
              { /* eslint-disable-next-line  */}
                <a href="#" onClick={handleLeftPlaylist}>
                  <FiChevronLeft size={26} />
                </a>
              </div>
              
              {playlist?.playlists.items.map((resp, index) => {
                return (
                  <a
                    key={resp.id}
                    href="#"
                    onClick={() =>
                      handlePreventPlaylist(playlist.playlists.items[index])
                    }
                  >
                    <div className="ListMusic">
                      <div className="ListTitle">
                        <img src={resp.images[0].url} alt="List Img" />
                        <strong></strong>
                      </div>
                    </div>
                  </a>
                );
              })}
              <div className="ListRight">
                { /* eslint-disable-next-line  */}
                <a href="#" onClick={handleRightPlaylist}>
                  <FiChevronRight size={26} />
                </a>
              </div>
            </div>
          )}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
