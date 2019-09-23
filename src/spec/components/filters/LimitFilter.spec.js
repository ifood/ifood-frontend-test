import React from "react";
import InputRange from "react-input-range";
import { shallow } from "enzyme";
import LimitFilter from "../../../javascript/components/filters/LimitFilter";

describe("The LimitFilter component", () => {
  let wrapper;
  const mockSetFilters = jest.fn();
  const mockName = "limit";
  const mockProps = {
    setFilter: mockSetFilters,
    limitValue: 0,
    name: mockName,
  };

  beforeEach(() => {
    wrapper = shallow(<LimitFilter {...mockProps} />);
  });

  it("should not render the filter if it's not defined", () => {
    wrapper = shallow(<LimitFilter {...mockProps} />);
    const inputRange = wrapper.find(InputRange);

    expect(inputRange.length).toEqual(0);
  });

  it("should call setFilter from props when handleChange is called", () => {
    const mockLimit = 0;
    wrapper.instance().handleChange(mockLimit);
    expect(mockSetFilters).toHaveBeenCalledWith(mockName, { value: mockLimit });
  });

  it("should pass down props from the filter to the InputRange component", () => {
    const definedProps = {
      ...mockProps,
      filter: {
        validation: {
          min: 2,
          max: 5,
        },
      },
    };
    wrapper = shallow(<LimitFilter {...definedProps} />);
    const inputRange = wrapper.find(InputRange);

    expect(inputRange.props()).toMatchObject({
      maxValue: 5,
      minValue: 2,
    });
  });
});
