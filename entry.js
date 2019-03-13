import "babel-polyfill";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/modules';
import Application from './src/Application';

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.querySelector('#root')
);
