import { createStore, applyMiddleware, compose } from "redux";
import ReduxPromise from "redux-promise-middleware";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";
let createStoreWithMiddleware;

export default () => {
  createStoreWithMiddleware = compose(
    applyMiddleware(ReduxPromise, ReduxThunk),
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);
  return store;
};
