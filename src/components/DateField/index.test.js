import React from "react";
import { render } from "@testing-library/react";

import DateField from "./index";

test("<DateField /> renders correcly", () => {
  const props = {
    dataStart: new Date(),
    onCalendarChange: () => {},
  };

  const component = (
    <DateField
      dataStart={props.dataStart}
      onCalendarChange={props.onCalendarChange}
    />
  );
  const { asFragment } = render(component);
  expect(asFragment(component)).toMatchSnapshot();
});
