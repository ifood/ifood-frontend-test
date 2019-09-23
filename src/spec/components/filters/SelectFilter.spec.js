import React from "react";
import Select from "react-select";
import { shallow } from "enzyme";
import SelectFilter from "../../../javascript/components/filters/SelectFilter";

describe("The SelectFilter component", () => {
  let wrapper;
  const filter = {
    values: [
      {
        name: "foo",
        value: "bar",
      },
      {
        name: "john",
        value: "doe",
      },
    ],
  };
  const filterNameMock = "filterName";
  let setFilterSpy;

  beforeEach(() => {
    setFilterSpy = jest.fn();
    const mockProps = {
      filter,
      name: filterNameMock,
      setFilter: setFilterSpy,
    };
    wrapper = shallow(<SelectFilter {...mockProps} />);
  });

  describe("The getOptions function", () => {
    it("should return an array with objects formatted for the Select interface given the values", () => {
      const result = wrapper.instance().getOptions();
      const expected = filter.values.map(value => ({
        label: value.name,
        value: value.value,
      }));

      expect(result).toMatchObject(expected);
    });
  });

  it("should not render the filter if it's not defined", () => {
    wrapper.setProps({ filter: undefined });
    const select = wrapper.find(Select);

    expect(select.length).toEqual(0);
  });

  it("should pass down props from the filter to the Select component", () => {
    const select = wrapper.find(Select);
    const options = wrapper.instance().getOptions();

    expect(select.prop("options")).toMatchObject(options);
  });

  it("should call this.handleChange when the Select component state is changed", () => {
    const select = wrapper.find(Select);
    expect(select.prop("onChange")).toEqual(wrapper.instance().handleChange);
  });

  it("should call this.props.setFilter when some option is selected", () => {
    const mockOption = { foo: "bar" };
    wrapper.instance().handleChange(mockOption);

    expect(setFilterSpy).toHaveBeenCalledWith(filterNameMock, mockOption);
  });
});
