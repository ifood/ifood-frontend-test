import React, { useEffect, useState } from "react";
import Spotify from "spotify-web-api-js";
import { useCookies } from "react-cookie";
import { ACCESSTOKEN, USER } from "../../assets/constants";
import { Dropdown, Input } from "../../atoms";
import { Header } from "../../molecules";
import { Container, Grid, GridItem, Item, ItemName, Wrapper } from "./styles";

const Home = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("pt_BR");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLimit, setSelectedLimit] = useState(20);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [cookies] = useCookies(["cookies"]);
  const accessToken = cookies[ACCESSTOKEN];
  const user = cookies[USER];
  const spotifyApi = new Spotify();
  const [playlists, setPlaylists] = useState();
  const [title, setTitle] = useState();
  const [filtersList, setFiltersList] = useState();
  const defaultFilters = {
    country: "BR",
    timestamp: new Date().toISOString(),
  };

  const setAccessToken = () => {
    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);
      getFeaturedPlaylists(
        selectedLanguage,
        defaultFilters.country,
        selectedLimit,
        defaultFilters.timestamp
      );
    }
  };

  const getFeaturedPlaylists = (locale, country, limit, timestamp) => {
    const filters = { locale, country, limit, timestamp };
    const data = [];
    spotifyApi
      .getFeaturedPlaylists(filters)
      .then((response) => {
        response.playlists.items.forEach((item) => {
          data.push({ ...item, active: true });
        });
        setPlaylists(data);
        setCurrentPlaylist(data);
        setTitle(response.message);
      })
      .catch((err) => {
        const error = JSON.parse(err.response).error.message;
        switch (error) {
          case "The access token expired":
            props.history.push("/redirect", "http://localhost:8888");
            break;

          case "Invalid country code":
            alert(error);
            setSelectedCountry(defaultFilters.country);
            break;

          default:
            alert(error);
            break;
        }
      });
  };

  const fetchFilters = () => {
    fetch("http://www.mocky.io/v2/5a25fade2e0000213aa90776")
      .then((response) => response.json())
      .then((data) => setFiltersList(data.filters));
  };

  useEffect(() => {
    setAccessToken();
    fetchFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchById = (id) => {
    let data = [];
    filtersList.forEach((item) => {
      if (item.id === id) {
        data = item.values;
      }
    });
    return data;
  };

  const handleLanguageClick = (id) => {
    selectedLanguage === id
      ? setSelectedLanguage(null)
      : setSelectedLanguage(id);

    getFeaturedPlaylists(
      id,
      selectedCountry ? selectedCountry : defaultFilters.country,
      selectedLimit,
      new Date().toISOString()
    );
  };

  const handleCountryClick = (id) => {
    selectedCountry === id ? setSelectedCountry(null) : setSelectedCountry(id);

    getFeaturedPlaylists(
      selectedLanguage,
      id,
      selectedLimit,
      new Date().toISOString()
    );
  };

  const handleLimitClick = (value) => {
    if (value > 0 && value <= 50) {
      setSelectedLimit(value);
      getFeaturedPlaylists(
        selectedLanguage,
        selectedCountry ? selectedCountry : defaultFilters.country,
        value,
        new Date().toISOString()
      );
    } else {
      if (value !== "") {
        alert("Limit must be between 1 and 50");
      }
    }
  };

  const filterByName = (event) => {
    const value = event.target.value.toUpperCase();
    const initialPlaylist = playlists;
    if (value !== "") {
      const newCurrentPlaylist = initialPlaylist.filter((item) =>
        item.name.toUpperCase().match(value, "g")
      );
      setCurrentPlaylist(newCurrentPlaylist);
    } else {
      setCurrentPlaylist(playlists);
    }
  };

  const renderPlaylist = (item) => {
    return (
      <GridItem
        key={item.id}
        itemId={item.id}
        className={item.id}
        isActive={item.active}
      >
        <Item image={item.images[0].url} />
        <ItemName>{item.name}</ItemName>
      </GridItem>
    );
  };

  return (
    <Container>
      {filtersList && (
        <div style={{ position: "fixed", right: 0 }}>
          <Dropdown
            onClick={(event) => handleLanguageClick(event.target.id)}
            selectedItem={selectedLanguage}
            width="112px"
            placeholder="Language"
            data={fetchById("locale")}
          />
        </div>
      )}
      <Header user={user} />
      <Grid>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {playlists && (
            <Input placeholder="Search Music" onChange={filterByName} />
          )}
          {filtersList && (
            <>
              <Dropdown
                onClick={(event) => handleCountryClick(event.target.id)}
                selectedItem={selectedCountry}
                placeholder="Select your music destination"
                data={fetchById("country")}
              />
              <Input
                onBlur={(event) => handleLimitClick(event.target.value)}
                placeholder="Type nº of results"
                type="number"
              />
            </>
          )}
        </div>
        {title && playlists && (
          <h1>
            {title} ({playlists.length} results)
          </h1>
        )}
      </Grid>
      <Wrapper>
        {currentPlaylist &&
          currentPlaylist.map((item) => item.active && renderPlaylist(item))}
      </Wrapper>
    </Container>
  );
};

export { Home };
