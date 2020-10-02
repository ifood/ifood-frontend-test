import React from "react";
import { render } from "@testing-library/react";

import Loader from "./index";

test("<Loader /> renders correcly", () => {
  const component = <Loader />;
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
