import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { saveAuthItems } from "utils/auth";

export default function CallbackHandler() {
  const history = useHistory();
  useEffect(() => {
    saveAuthItems();
    history.push("/");
  }, []);
  return null;
}
