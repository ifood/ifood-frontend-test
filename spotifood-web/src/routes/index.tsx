import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes: React.FC = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home}   /> 
    </Switch>
   </BrowserRouter> 
)


export default Routes




