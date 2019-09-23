import {
  SET_ACCESS_TOKEN,
  FETCH_FEATURED_PLAYLISTS,
} from "../../javascript/constants";
import spotifyActions from "../../javascript/actions/spotify";
import axios from "axios";

describe("The filters action creators", () => {
  it("should return action", () => {
    const mockToken = "foo";
    const actionCreator = spotifyActions.setAccessToken(mockToken);
    expect(actionCreator).toEqual({
      type: SET_ACCESS_TOKEN,
      payload: {
        token: mockToken,
      },
    });
  });

  describe("the fetchFeaturedPlaylists action", () => {
    it("should return an action creator with a promise when it's called", () => {
      jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve());
      const action = spotifyActions.fetchFeaturedPlaylists();
      expect(action).toEqual({
        type: FETCH_FEATURED_PLAYLISTS,
        payload: {
          promise: expect.objectContaining({}),
        },
      });
    });

    it("should call axios.get with proper parameters when it's called", () => {
      const mockToken = "foo";
      const filters = { john: { value: "doe" } };
      const getSpy = jest.spyOn(axios, "get");
      spotifyActions.fetchFeaturedPlaylists(mockToken, filters);

      const url =
        "https://api.spotify.com/v1/browse/featured-playlists?john=doe";
      const headers = { headers: { Authorization: "Bearer foo" } };
      expect(getSpy).toHaveBeenCalledWith(url, headers);
    });
  });
});
