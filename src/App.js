import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import Authorize from './components/Authorize';

import Home from './Pages/Home';
import List from './Pages/List';

const App = () => ((
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/authorize" component={Authorize} />
      <Route path="/list" component={List} />
    </div>
  </Router>
));

export default App;
