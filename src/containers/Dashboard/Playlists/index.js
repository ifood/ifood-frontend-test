import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PlaylistsActions } from "store/ducks/playlists";
import fetchFilterOptions from "store/actions/filter";

import { Title, Color } from "components/core/Typography";
import Playlists from "components/presentation/Playlists";
import Filter from "components/core/Filter";

const PlaylistsContainer = () => {
  const dispatch = useDispatch();

  const { isLoading, isSuccess, playlists, error } = useSelector(
    ({ playlists }) => playlists
  );

  const {
    isLoading: filterIsLoading,
    isSuccess: filterIsSuccess,
    options,
  } = useSelector(({ filter }) => filter);

  useEffect(() => {
    !filterIsSuccess && dispatch(fetchFilterOptions());
  }, [dispatch, filterIsSuccess]);

  const getPlaylists = () => {
    dispatch(PlaylistsActions.playlists());
  };

  useEffect(() => {
    const updatePlaylists = setInterval(() => {
      getPlaylists();
    }, 30000);

    return () => clearInterval(updatePlaylists);
  }, []);

  useEffect(() => {
    !isSuccess && !error && getPlaylists();
  }, [dispatch, isSuccess]);

  const handleFilter = (values) => {
    Object.keys(values).forEach((value) => {
      if (!values[value]) delete values[value];
    });

    dispatch(PlaylistsActions.playlists(values));
  };

  return (
    <>
      <Title>
        Playlists em <Color color="red">destaque.</Color>
      </Title>

      <Filter
        isLoading={filterIsLoading}
        options={options}
        handleFilter={handleFilter}
      />

      <Playlists
        isLoading={isLoading}
        playlists={playlists}
        filterOptions={options}
        error={error}
        handleFilter={handleFilter}
      />
    </>
  );
};

export default PlaylistsContainer;
