import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filtersContainerData } from "constants/data/containers/Filters";

import { nameFilter } from "helpers/nameFilter";

import {
  updatePlaylistsStatus,
  filterPlaylists,
  removeFilteredPlaylists,
} from "store/modules/playlists/actions";

import * as S from "./styled";

const Search = () => {
  const dispatch = useDispatch();
  const currentPlaylists = useSelector((state) => state.playlists.items);

  const searchByName = useCallback(
    (e) => {
      const { value } = e.target;

      const filterByName = nameFilter(value, currentPlaylists);

      switch (filterByName.nameFilterStatus) {
        case "isEmpty":
          dispatch(updatePlaylistsStatus(false));
          dispatch(removeFilteredPlaylists());
          break;

        case "hasMatch":
          dispatch(updatePlaylistsStatus(false));
          dispatch(filterPlaylists(filterByName.filteredItems));
          break;

        case "hasNoMatch":
          dispatch(updatePlaylistsStatus(true));
          dispatch(removeFilteredPlaylists());
          break;

        default:
          break;
      }
    },
    [currentPlaylists, dispatch]
  );

  return (
    <S.SearchWrapper>
      <S.SearchByName
        onChange={(e) => searchByName(e)}
        placeholder={filtersContainerData.search_name_label}
      />
    </S.SearchWrapper>
  );
};

export default Search;
