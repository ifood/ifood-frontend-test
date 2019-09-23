import React from "react";
import InputNumber from "rc-input-number";
import { shallow } from "enzyme";
import TextFilter from "../../../javascript/components/filters/TextFilter";

describe("The TextFilter component", () => {
  let wrapper;
  const mockSetFilters = jest.fn();
  const mockName = "limit";
  const mockProps = {
    setFilter: mockSetFilters,
    name: mockName,
  };

  beforeEach(() => {
    wrapper = shallow(<TextFilter {...mockProps} />);
  });

  it("should not render the filter if it's not defined", () => {
    wrapper = shallow(<TextFilter {...mockProps} />);
    const inputNumber = wrapper.find(InputNumber);

    expect(inputNumber.length).toEqual(0);
  });

  it("should call setFilter from props when handleChange is called", () => {
    const mockText = {};
    wrapper.instance().handleChange({ target: { value: mockText } });
    expect(mockSetFilters).toHaveBeenCalledWith(mockName, mockText);
  });
});
