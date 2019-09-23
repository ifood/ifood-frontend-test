import React from "react";
import { shallow } from "enzyme";
import Filter from "../../javascript/components/Filter";

describe("The Filter component", () => {
  let wrapper;
  const mockGetFilters = jest.fn();
  const mockSetFilters = jest.fn();
  const mockFetchPlaylists = jest.fn();
  const mockAccessToken = "token";
  const filters = {
    limit: { name: "limit" },
    locale: { name: "locale" },
    country: { name: "country" },
    timestamp: { name: "timestamp" },
    offset: { name: "offset" },
    values: {},
  };
  const mockProps = {
    getFilters: mockGetFilters,
    setFilter: mockSetFilters,
    fetchPlaylists: mockFetchPlaylists,
    accessToken: mockAccessToken,
    filters,
  };

  beforeEach(() => {
    wrapper = shallow(<Filter {...mockProps} />);
  });

  it("should call the props.getFilters when component mounts", () => {
    expect(mockGetFilters).toHaveBeenCalled();
  });

  it("should call the props.getFilters when filters update", () => {
    const newFilters = { values: { something: "else" } };
    mockFetchPlaylists.mockReset();
    wrapper.setProps({ filters: newFilters });
    expect(mockFetchPlaylists).toHaveBeenCalledWith(
      mockAccessToken,
      newFilters.values,
    );
  });
});
