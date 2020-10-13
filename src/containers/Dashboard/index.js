import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isAuthenticated } from "services/api";
import { UserActions } from "store/ducks/user";

import Loading from "components/core/Loading";
import Layout from "components/core/Layout";
import Auth from "./Auth";
import Playlists from "./Playlists";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { isLoading, userName } = useSelector(({ user }) => user);
  const { isSuccess } = useSelector(({ auth }) => auth);

  useEffect(() => {
    isAuthenticated() && dispatch(UserActions.getUser());
  }, [dispatch, isSuccess]);

  return (
    <Loading isLoading={isLoading}>
      <Layout userName={userName}>
        {!isAuthenticated() ? <Auth /> : <Playlists />}
      </Layout>
    </Loading>
  );
};

export default Dashboard;
