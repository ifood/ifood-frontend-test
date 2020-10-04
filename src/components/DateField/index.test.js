import React from "react";
import { render } from "@testing-library/react";

import DateField from "./index";

test("<DateField /> renders correcly", () => {
  const mockedDate = new Date(2017, 11, 10);

  const props = {
    dataStart: mockedDate,
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
