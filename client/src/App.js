import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from './component/main/container';
import LoginContainer from './component/login/container';
import Page404 from './component/error/container';

import './App.scss';

const App = () => {
	return (
		<Switch>
			<Route path="/autenticar" component={LoginContainer} />
			<Route path="/lista" component={MainContainer} />
			<Route component={Page404} />
		</Switch>
	);
};

export default App;
