import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import Header from './components/layouts/Header'
import LandingPage from './container/LandingPage'
import Button from './components/common/Button'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'><Header button = {<Button/>} headersize='cover'/></Route>
        <Route path='/playlists'> <LandingPage icon={<Icon className='arrow down' color='orange' size="big"/>} /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
