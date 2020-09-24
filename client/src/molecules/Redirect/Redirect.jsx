import React, { useEffect } from "react";

const Redirect = () => {
  console.log("koko");
  useEffect(() => {
    window.location.href = "http://localhost:8888";
  }, []);
  return <section>Redirecting...</section>;
};

export default Redirect;
