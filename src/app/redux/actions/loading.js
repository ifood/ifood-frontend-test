export const ACTION_LOADING_START = 'LOADING_START';
export const ACTION_LOADING_END = 'LOADING_END';

export const startLoading = () => ({
  type: ACTION_LOADING_START,
});

export const stopLoading = () => ({
  type: ACTION_LOADING_END,
});

export const addLoading = () => (dispatch) => dispatch(startLoading());

export const removeLoading = () => (dispatch) => dispatch(stopLoading());
