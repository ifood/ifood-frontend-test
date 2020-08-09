import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './Signin';
import Home from './Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
