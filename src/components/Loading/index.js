import React from "react";

import { Spinner, BounceOne, BounceTwo, BounceThree } from "./styles";

const Loading = () => {
  return (
    <Spinner>
      <BounceOne />
      <BounceTwo />
      <BounceThree />
    </Spinner>
  );
};

export default Loading;
