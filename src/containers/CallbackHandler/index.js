import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getHashParams } from "utils/spotify";

export default function CallbackHandler() {
  const history = useHistory();
  useEffect(() => {
    const parsed = getHashParams();
    sessionStorage.setItem("access_token", parsed.access_token);
    sessionStorage.setItem("expires_in", parsed.expires_in);
    sessionStorage.setItem("token_type", parsed.token_type);
    history.push("/");
  }, []);
  return <div></div>;
}
