import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import NotFoundPage from '../NotFoundPage'
import PlaylistsPage from '../PlaylistsPage'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={PlaylistsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>

      <Footer />
    </div>
  )
}

export default App
