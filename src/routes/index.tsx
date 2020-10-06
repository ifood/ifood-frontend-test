import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import App from '../App';
import { Home } from 'pages/home';
import { Error } from 'pages/error';

const Routes: React.FC = () => (
  <Router>
    {/* <Route path="/" exact component={App} /> */}
    <Route path="/" exact component={Home} />
    <Route component={Error} />
  </Router>
);

export default Routes;
