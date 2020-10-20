import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Head from "components/Head";
import Filters from "containers/Filters";
import Search from "containers/Search";
import PlaylistsList from "containers/PlaylistsList";

import userToken from "helpers/userToken";
import { setUserAuth } from "store/modules/auth/actions";

const Playlists = () => {
  const dispatch = useDispatch();
  const authServices = userToken();
  const hasToken = authServices.checkToken();
  const token = authServices.getToken();

  useEffect(() => {
    if (hasToken) {
      const userAuthenticationState = {
        isAuth: true,
        token,
      };

      dispatch(setUserAuth(userAuthenticationState));
    }
  }, [dispatch, hasToken, token]);

  return (
    <>
      {hasToken ? (
        <>
          <Head />
          <Search />
          <Filters />
          <PlaylistsList />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Playlists;
