import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'
import PlaylistsPage from '../PlaylistsPage'

import './styles.css'

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
