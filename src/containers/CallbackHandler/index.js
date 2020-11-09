import React, { useEffect } from "react";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { saveAuthItems } from "utils/auth";

export default function CallbackHandler() {
  const history = useHistory();
  useEffect(() => {
    const params = queryString.parse(window.location.search);
    if (params.error) {
      if (params.error === "access_denied") {
        return history.push("/intro?denied=true");
      }
      return history.push("/intro?error=true");
    }
    saveAuthItems();
    history.push("/");
  }, []);
  return null;
}
