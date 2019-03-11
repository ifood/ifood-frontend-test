// Importantando o React
import React from "react";

// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './routes/privateRoutes';

import LoginSpotify from "./components/login/login";
import Home from "./components/home/home";
import Authorize from "./components/authorize/authorize";

const Main = () => (
  <div className="container">
    <main>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={LoginSpotify} />
          <Route exact path='/authorize' component={Authorize} /> 
        </Switch>
      </BrowserRouter>	
    </main>
  </div>
);

export default Main;