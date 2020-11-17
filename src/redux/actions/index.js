import { API_FILTER_CHANGE } from "../actions/actionTypes";

export const apiFilterChange = (apiFilterSelectedValues) => ({
  type: API_FILTER_CHANGE,
  apiFilterSelectedValues,
});