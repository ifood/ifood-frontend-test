import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Spacer from "components/Spacer";
import PlaylistCard from "components/PlaylistCard";
import Wrapper from "components/Wrapper";
import Loader from "components/Loader";
import PlaylistsApiService from "services/playlists";
import { playlistsListContainerData } from "constants/data/containers/PlaylistsList";

import {
  loadPlaylists,
  removePlaylists,
} from "store/modules/playlists/actions";

import * as S from "./styled";

const PlaylistsList = () => {
  const [tokenInvalid, setTokenInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const playlistsList = useSelector((state) => state.playlists.items);
  const playlistsStatus = useSelector((state) => state.playlists.isEmpty);

  useEffect(() => {
    if (token) {
      const requestPlaylists = PlaylistsApiService();
      const { getPlaylists } = requestPlaylists;

      getPlaylists(token)
        .then((data) => {
          dispatch(loadPlaylists(data));
          setIsLoading(false);
        })
        .catch(() => {
          setTokenInvalid(true);
          setIsLoading(false);
          dispatch(removePlaylists());
        });
    }
  }, [dispatch, token]);

  return (
    <Wrapper>
      <S.PlaylistsListValidations>
        {tokenInvalid && (
          <>
            <p>{playlistsListContainerData.errors.invalid_token}</p>

            <Spacer sizes={{ desktop: "md" }} />

            <S.PlaylistsListLink>
              <Link to="/">{playlistsListContainerData.cta_label}</Link>
            </S.PlaylistsListLink>
          </>
        )}

        {playlistsStatus && (
          <p>{playlistsListContainerData.errors.empty_return}</p>
        )}

        {isLoading && <Loader />}
      </S.PlaylistsListValidations>
      <S.PlaylistsList>
        {!tokenInvalid && (
          <>
            {playlistsList.map((item) => (
              <PlaylistCard
                key={item.id}
                title={item.name}
                image={item.images.length >= 0 && item.images[0].url}
                author={item.owner.display_name}
                label={playlistsListContainerData.playlist_link_label}
                link={item.external_urls.spotify}
                authorPrefix={playlistsListContainerData.playlist_author_prefix}
              />
            ))}
          </>
        )}
      </S.PlaylistsList>
    </Wrapper>
  );
};

export default PlaylistsList;
