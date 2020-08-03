import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import FeaturedPlaylist from './featured-playlists'

const Router = ({ handlerLanguage }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' render={() => <FeaturedPlaylist handlerLanguage={handlerLanguage}/>}></Route>
      </Switch>
    </BrowserRouter>
  )
}

Router.propTypes = {
  handlerLanguage: PropTypes.func.isRequired
}

export default Router
