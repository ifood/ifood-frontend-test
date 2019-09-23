import React from "react";
import { shallow } from "enzyme";
import Header from "../../javascript/components/Header";

describe("The NumericFilter component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render the logo image", () => {
    const logo = wrapper.find("img");
    expect(logo.length).toEqual(1);
  });
});
