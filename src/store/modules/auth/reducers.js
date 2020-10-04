const initialAuthState = {
  isAuth: false,
  token: null,
};

export default function authentication(state = initialAuthState, action) {
  switch (action.type) {
    case "SET_USER_AUTH":
      return { ...state, ...action.authentication };

    default:
      return state;
  }
}
