import React from "react";
import { shallow } from "enzyme";
import App from "../../javascript/components/App";
import Filter from "../../javascript/containers/Filter";

describe("The App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders the filter component", () => {
    const wrapper = shallow(<App />);
    const filter = wrapper.find(Filter);

    expect(filter.length).toEqual(1);
  });
});
