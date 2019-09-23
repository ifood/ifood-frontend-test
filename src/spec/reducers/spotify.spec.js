import {
  SET_ACCESS_TOKEN,
  FETCH_FEATURED_PLAYLISTS,
} from "../../javascript/constants";
import reducer from "../../javascript/reducers/spotify.js";

describe("The filters action creators", () => {
  it("should return the filters array when request is successful", () => {
    const action = {
      type: SET_ACCESS_TOKEN,
      payload: { token: "token" },
    };

    const newState = reducer({}, action);
    expect(newState.accessToken).toEqual(action.payload.token);
  });

  describe("the FETCH_FEATURED_PLAYLISTS related cases", () => {
    it("should return the filters array when request is successful", () => {
      const mockPlaylists = [{ foo: "bar", john: "doe" }];
      const action = {
        type: `${FETCH_FEATURED_PLAYLISTS}_FULFILLED`,
        payload: {
          data: {
            playlists: {
              items: mockPlaylists,
            },
          },
        },
      };

      const newState = reducer({}, action);
      expect(newState.playlists).toEqual(mockPlaylists);
    });

    it("should return an empty array when playlists were not retrieved", () => {
      const action = {
        type: `${FETCH_FEATURED_PLAYLISTS}_FULFILLED`,
        payload: {},
      };

      const newState = reducer({}, action);
      expect(newState.playlists).toEqual([]);
    });
  });
});
