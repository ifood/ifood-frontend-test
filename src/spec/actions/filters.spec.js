import {
  GET_TRENDING_PLAYLISTS_FILTERS,
  SET_FILTER,
} from "../../javascript/constants";
import axios from "axios";
import filterActions from "../../javascript/actions/filters.js";

describe("The filters action creators", () => {
  describe("The getFilters action", () => {
    it("should return a promise on the payload", () => {
      const action = filterActions.getFilters();
      jest.spyOn(axios, "get").mockImplementation(() => Promise.resolve({}));
      expect(action).toEqual({
        type: GET_TRENDING_PLAYLISTS_FILTERS,
        payload: {
          promise: expect.objectContaining({}),
        },
      });
    });
  });

  describe("The setFilter action", () => {
    it("should return action", () => {
      const actionCreator = filterActions.setFilter("foo", "bar");
      expect(actionCreator).toEqual({
        type: SET_FILTER,
        payload: {
          field: "foo",
          value: "bar",
        },
      });
    });
  });
});
