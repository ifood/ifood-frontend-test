import { LoadingActions } from '../actions';

export default (
  state = 0,
  action,
) => {
  switch (action.type) {
    case LoadingActions.ACTION_LOADING_START:
      return state + 1;
    case LoadingActions.ACTION_LOADING_END:
      return state - 1;
    default:
      return state;
  }
};

export function getLoading(state) {
  return state.loading;
}
