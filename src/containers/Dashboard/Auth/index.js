import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AuthActions } from "store/ducks/auth";

import Auth from "components/presentation/Auth";

const AuthContainer = () => {
  const dispatch = useDispatch();

  const [authorizationCode, setAuthorizationCode] = useState("");

  const getAuthorizationCode = () => {
    const url = window.location.href;

    if (url.indexOf("code=") > -1) {
      const authToken = url.split("code=")[1].split("&")[0].trim();
      setAuthorizationCode(authToken);
    }

    return authorizationCode;
  };

  useEffect(() => {
    !authorizationCode && getAuthorizationCode();
  }, [authorizationCode]);

  useEffect(() => {
    authorizationCode && dispatch(AuthActions.auth(authorizationCode));
  }, [authorizationCode, dispatch]);

  return <Auth />;
};

export default AuthContainer;
