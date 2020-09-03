import React, { useEffect, useContext, useState } from "react";
import {
  PlaylistsStateContext,
  PlaylistsDispatchContext,
  loadPlaylists,
} from "../../context/Playlists";
import { FilterStateContext } from "../../context/Filter";

import AlbumPlay from "../../assets/images/album-play.svg";

import {
  Container,
  Title,
  FilterByName,
  Playlists,
  Playlist,
  PLaylistImage,
  PlayerImage,
} from "./styles";
import Loading from "../Loading";
import Error from "../Error";

const FeaturedPlaylits = () => {
  const { featuredPlaylist, loading, error } = useContext(
    PlaylistsStateContext
  );
  const dispatch = useContext(PlaylistsDispatchContext);
  const [name, setName] = useState("");

  const { selectedFilters } = useContext(FilterStateContext);

  useEffect(() => {
    const interval = setInterval(() => {
      loadPlaylists(dispatch, selectedFilters);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedFilters, dispatch]);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    loadPlaylists(dispatch, selectedFilters);
  }, [selectedFilters, dispatch]);

  const playlistsByName = (name) => {
    return (
      featuredPlaylist &&
      featuredPlaylist.playlists &&
      featuredPlaylist.playlists.items.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error && error !== "" ? (
            <Error message={error} />
          ) : (
            featuredPlaylist && (
              <div>
                <Title>{featuredPlaylist.message}</Title>
                <FilterByName
                  type="text"
                  placeholder="Filtrar por nome..."
                  aria-label="playlistName"
                  onChange={(event) => setName(event.target.value)}
                />
                <Playlists>
                  {playlistsByName(name) &&
                    playlistsByName(name).map((playlist) => (
                      <Playlist key={playlist.id}>
                        <a
                          href={playlist.external_urls.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PLaylistImage
                            src={playlist.images[0].url}
                            alt={`${playlist.name} playlist image`}
                          />
                          <PlayerImage src={AlbumPlay} alt="player icon" />
                        </a>
                      </Playlist>
                    ))}
                </Playlists>
              </div>
            )
          )}
        </>
      )}
    </Container>
  );
};

export default FeaturedPlaylits;
