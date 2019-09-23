import {
  GET_TRENDING_PLAYLISTS_FILTERS,
  SET_FILTER,
} from "../../javascript/constants";
import reducer from "../../javascript/reducers/filters.js";

describe("The filters action creators", () => {
  it("should map the filters to an object when the request is successful", () => {
    const filters = [{ id: "foo", name: "bar" }, { id: "bar", name: "baz" }];
    const response = { data: { filters } };

    const action = {
      type: `${GET_TRENDING_PLAYLISTS_FILTERS}_FULFILLED`,
      payload: response,
    };

    const newState = reducer({}, action);

    expect(newState).toMatchObject({
      foo: { name: "bar" },
      bar: { name: "baz" },
    });
  });

  it("should set the corresponding filter field", () => {
    const action = {
      type: SET_FILTER,
      payload: {
        field: "foo",
        value: "bar",
      },
    };

    const newState = reducer({}, action);

    expect(newState.values.foo).toEqual("bar");
  });

  it("should not change state otherwise", () => {
    const response = { data: {} };
    const action = {
      type: `${GET_TRENDING_PLAYLISTS_FILTERS}_REJECTED`,
      payload: response,
    };
    const state = { filters: {} };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });
});
