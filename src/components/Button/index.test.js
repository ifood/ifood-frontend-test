import React from "react";
import { render } from "@testing-library/react";

import Button from "./index";

test("<Button/> renders correcly", () => {
  const anyFunction = () => {
    return true;
  };

  const props = {
    label: "any label",
    onClick: () => anyFunction(),
  };

  const component = <Button label={props.label} onClick={props.onClick} />;
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
