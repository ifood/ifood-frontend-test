import React from "react";

import { Spinner, BounceOne, BounceTwo, BounceThree } from "./styles";

const Loading = () => {
  return (
    <Spinner data-testid="loading">
      <BounceOne />
      <BounceTwo />
      <BounceThree />
    </Spinner>
  );
};

export default Loading;
