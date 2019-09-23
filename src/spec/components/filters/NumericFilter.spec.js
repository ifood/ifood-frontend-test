import React from "react";
import InputNumber from "rc-input-number";
import { shallow } from "enzyme";
import NumericFilter from "../../../javascript/components/filters/NumericFilter";

describe("The NumericFilter component", () => {
  let wrapper;
  const mockSetFilters = jest.fn();
  const mockName = "limit";
  const mockProps = {
    filter: {},
    setFilter: mockSetFilters,
    name: mockName,
  };

  beforeEach(() => {
    wrapper = shallow(<NumericFilter {...mockProps} />);
  });

  it("should not render the filter if it's not defined", () => {
    wrapper.setProps({ filter: null });
    const inputNumber = wrapper.find(InputNumber);

    expect(inputNumber.length).toEqual(0);
  });

  it("should call setFilter from props when handleChange is called", () => {
    const mockNumber = 0;
    wrapper.instance().handleChange(mockNumber);
    expect(mockSetFilters).toHaveBeenCalledWith(mockName, {
      value: mockNumber,
    });
  });
});
