import React from "react";
import DatePicker from "react-datepicker";
import { shallow } from "enzyme";
import moment from "moment";
import DateFilter from "../../../javascript/components/filters/DateFilter";

describe("The DateFilter component", () => {
  let wrapper;
  let mockSetFilters;
  const mockName = "dateFilter";
  const mockDate = new Date();
  let mockProps;

  beforeEach(() => {
    mockSetFilters = jest.fn();
    mockProps = {
      filter: {},
      setFilter: mockSetFilters,
      name: mockName,
      value: mockDate,
    };
    wrapper = shallow(<DateFilter {...mockProps} />);
  });

  it("should not render the filter if it's not defined", () => {
    wrapper.setProps({ filter: null });
    const datePicker = wrapper.find(DatePicker);

    expect(datePicker.length).toEqual(0);
  });

  it("should call setFilter from props when handleChange is called", () => {
    const mockDate = {};
    wrapper.instance().handleChange(mockDate);
    expect(mockSetFilters).toHaveBeenCalled();
  });

  it("should pass down props from the filter to the DatePicker component", () => {
    const mockDate = new Date();
    const definedProps = {
      ...mockProps,
      filter: {},
      value: mockDate,
    };
    wrapper = shallow(<DateFilter {...definedProps} />);
    const datePicker = wrapper.find(DatePicker);

    expect(datePicker.props()).toMatchObject({
      selected: mockDate,
    });
  });

  it("should pass down a Moment object as the selected value to DatePicker if a value is given", () => {
    const datePicker = wrapper.find(DatePicker);
    const expectedDate = moment(mockDate).toDate();
    expect(datePicker.prop("selected")).toEqual(expectedDate);
  });

  it("should pass down null as the selected value to DatePicker if a value is given", () => {
    wrapper.setProps({ value: null });
    const datePicker = wrapper.find(DatePicker);
    expect(datePicker.prop("selected")).toEqual(null);
  });
});
