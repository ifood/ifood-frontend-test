import React from "react";
import { shallow } from "enzyme";
import FeaturedPlaylists from "../../javascript/components/FeaturedPlaylists";

describe("The FeaturedPlaylists component", () => {
  let wrapper;
  const mockAccessToken = "token";
  const mockPlaylists = [{ name: "foo" }, { name: "bar" }];
  const mockfetchFeaturedPlaylists = jest.fn();
  const mockFilters = {};
  const mockProps = {
    accessToken: mockAccessToken,
    playlists: mockPlaylists,
    fetchFeaturedPlaylists: mockfetchFeaturedPlaylists,
    filters: mockFilters,
  };

  beforeEach(() => {
    wrapper = shallow(<FeaturedPlaylists {...mockProps} />);
  });

  it("should call instance.fetchPlaylists for the first time if accessToken is set and there are no playlists yet", () => {
    const mockFetchPlaylists = jest.spyOn(wrapper.instance(), "fetchPlaylists");
    wrapper.setProps({ playlists: [] });
    expect(mockFetchPlaylists).toHaveBeenCalled();
  });

  it("should start calling instance.fetchPlaylists periodically after component mounts", () => {
    jest.useFakeTimers();
    wrapper = shallow(<FeaturedPlaylists {...mockProps} />);
    const callCount = mockfetchFeaturedPlaylists.mock.calls.length;
    jest.advanceTimersByTime(30000);
    const newCallCount = mockfetchFeaturedPlaylists.mock.calls.length;

    expect(newCallCount).toBe(callCount + 1);
  });

  it("should clear the setTimeOut on componentWillUnmount", () => {
    wrapper.instance().componentWillUnmount();
    expect(clearInterval).toHaveBeenCalledWith(wrapper.instance().interval);
  });

  it("should call props.fetchFeaturedPlaylists when fetchPlayLists is invoked", () => {
    wrapper.instance().fetchPlaylists();
    expect(mockfetchFeaturedPlaylists).toHaveBeenCalledWith(
      mockAccessToken,
      mockFilters,
    );
  });

  it("should render all playlists when there are no filters", () => {
    const result = wrapper.instance().renderPlaylists();
    expect(result.length).toEqual(mockPlaylists.length);
  });

  it("should only display playlists that contain a given filter in its name", () => {
    wrapper.setProps({ filters: { name: "f" } });
    const result = wrapper.instance().renderPlaylists();
    expect(result.length).toEqual(1);
  });
});
