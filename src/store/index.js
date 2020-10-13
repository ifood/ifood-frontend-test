import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import Reducers from "./ducks";
import Sagas from "./sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  Reducers(history),
  applyMiddleware(thunk, ...middlewares)
);

sagaMiddleware.run(Sagas);

export default store;
