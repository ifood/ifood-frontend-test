import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './containers/HomePage'
import NotFoundPage from './containers/NotFoundPage'
import PlaylistsPage from './containers/PlaylistsPage'

import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={PlaylistsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App
