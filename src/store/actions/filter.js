import { GET_FILTER_OPTIONS } from "utils/constants/endpoints";
import { FilterActions } from "store/ducks/filter";

const fetchFilterOptions = () => {
  return async (dispatch) => {
    dispatch(FilterActions.fetchFilter());

    try {
      return fetch(GET_FILTER_OPTIONS).then((response) =>
        response
          .json()
          .then((json) => dispatch(FilterActions.fetchFilterSuccess(json)))
      );
    } catch (err) {
      dispatch(FilterActions.fetchFilterFailure(err));
    }
  };
};

export default fetchFilterOptions;
