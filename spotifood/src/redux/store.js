import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

const history = require('history').createBrowserHistory();

const store = createStore(
    reducers, 
    applyMiddleware(routerMiddleware(history))
);
export { store, history };