export const SIGNIN_SPOTIFY = '@authentication/SIGNIN_SPOTIFY';
export const SIGNOFF_SPOTIFY = '@authentication/SIGNOFF_SPOTIFY';
export const SET_USER_INFORMATION = '@authentication/SET_USER_INFORMATION';
export const RESET = '@authentication/RESET';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: undefined,
  accessToken: '',
};

/* Action Handlers */
export const signIn = () => async (dispatch, _, services) => {
  try {
    await services.authentication.authenticateSpotify();
  } catch (err) {
    // TODO: create a notification reducer
    // console.log(`SpotifyFood Error: Authentication: `, err)
  }
};

export const signInSuccess = accessToken => async (dispatch) => {
  try {
    dispatch({
      type: SIGNIN_SPOTIFY,
      accessToken,
    });
  } catch (err) {
    // TODO: create a notification reducer
    // console.log(`SpotifyFood Error: Authentication: `, err)
  }
};

export const getUserInformation = () => async (dispatch, getState, services) => {
  try {
    const { accessToken } = getState().authentication;
    const userInformation = await services.authentication.getUserInformation(accessToken);
    dispatch({ type: SET_USER_INFORMATION, userInformation });
  } catch (err) {
    // TODO: create a notification reducer
    // console.log(`SpotifyFood Error: Authentication: `, err)
  }
};

export const signOff = () => async (dispatch) => {
  try {
    dispatch({ type: SIGNOFF_SPOTIFY });
  } catch (err) {
    // TODO: create a notification reducer
    // console.log(`SpotifyFood Error: Authentication: `, err)
  }
};

export const reset = () => async (dispatch) => {
  dispatch({ type: RESET });
};

/* REDUCER */
function authenticationReducer(state = INITIAL_STATE, action) {
  let newState = { ...state };

  switch (action.type) {
    case SIGNIN_SPOTIFY: {
      newState = {
        ...state,
        isAuthenticated: true,
        accessToken: action.accessToken,
      };
      break;
    }
    case SIGNOFF_SPOTIFY: {
      newState = INITIAL_STATE;
      break;
    }
    case SET_USER_INFORMATION: {
      newState = {
        ...state,
        user: action.userInformation,
      };
      break;
    }
    case RESET: {
      newState = INITIAL_STATE;
      break;
    }
    default:
      break;
  }

  return newState;
}

export default authenticationReducer;
