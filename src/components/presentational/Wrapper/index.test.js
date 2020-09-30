import React from "react";
import { render } from "@testing-library/react";

import Button from "components/presentational/Button/index";
import Wrapper from "./index";

test("<Wrapper/> renders correcly", () => {
  const func = () => {
    return true;
  };

  const component = (
    <Wrapper
      childrren={<Button label="Button label" onClick={() => func()} />}
    />
  );
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
