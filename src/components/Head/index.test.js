import React from "react";
import { render } from "@testing-library/react";

import Head from "./index";

test("<Head/> renders correcly", () => {
  const props = {
    title: "Spotifood",
    tagline: "Where music meets iFood",
  };

  const component = <Head title={props.title} tagline={props.tagline} />;
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
