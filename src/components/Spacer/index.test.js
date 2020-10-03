import React from "react";
import { render } from "@testing-library/react";

import Wrapper from "./index";

test("<Spacer/> renders correcly", () => {
  const props = {
    sizes: { desktop: "xl", mobile: "sm" },
  };

  const component = <Wrapper sizes={props.sizes} />;
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
