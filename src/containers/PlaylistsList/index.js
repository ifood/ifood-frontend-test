import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PlaylistCard from "components/PlaylistCard";
import Wrapper from "components/Wrapper";
import Loader from "components/Loader";

import PlaylistsApiService from "services/playlists";

import { loadPlaylists } from "store/modules/playlists/actions";

import * as S from "./styled";

const PlaylistsList = () => {
  const [tokenInvalid, setTokenInvalid] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const playlistsList = useSelector((state) => state.playlists);

  useEffect(() => {
    if (token) {
      const requestPlaylists = PlaylistsApiService();
      const { getPlaylists } = requestPlaylists;

      getPlaylists(token)
        .then((data) => {
          dispatch(loadPlaylists(data));
        })
        .catch(() => {
          setTokenInvalid(true);
        });
    }
  }, [dispatch, token]);

  return (
    <Wrapper>
      <S.PlaylistsList>
        {playlistsList.length === 0 && <Loader />}

        {tokenInvalid ? (
          `Token invalido ou expirado`
        ) : (
          <>
            {playlistsList.map((item) => (
              <PlaylistCard
                key={item.id}
                title={item.name}
                image={item.images.length >= 0 && item.images[0].url}
                author={item.owner.display_name}
                label="Listen on spotify"
                link={item.external_urls.spotify}
              />
            ))}
          </>
        )}
      </S.PlaylistsList>
    </Wrapper>
  );
};

export default PlaylistsList;
