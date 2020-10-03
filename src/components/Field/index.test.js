import React from "react";
import { render } from "@testing-library/react";

import Field from "./index";

test("<Field /> renders correcly", () => {
  const props = {
    placeholder: "Digite seu texto",
  };

  const component = <Field placeholder={props.placeholder} />;
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
