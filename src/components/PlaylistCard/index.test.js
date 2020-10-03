import React from "react";
import { render } from "@testing-library/react";

import PlaylistCard from "./index";

test("<PlaylistCard/> renders correcly", () => {
  const props = {
    link: "any_link",
    image: "any_url",
    title: "Today's Hitss",
    author: "Spotify",
    label: "Listen on spotify",
  };

  const component = (
    <PlaylistCard
      link={props.link}
      image={props.image}
      title={props.title}
      author={props.author}
      label={props.label}
    />
  );
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
