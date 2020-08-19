/**
 *
 * PlaylistsPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import hashes from '../../utils/getTokenFromHash'

import { fetchFiltersAction } from './actions'

export function PlaylistsPage(props) {
  const { fetchFilters, history } = props

  useEffect(() => {
    if (hashes.access_token) {
      fetchFilters()
    } else {
      history.replace('/')
    }
  }, [fetchFilters, history])

  return (
    <h1>
      Playlists Page
    </h1>
  )
}

PlaylistsPage.propTypes = {
  history: PropTypes.object.isRequired,
  fetchFilters: PropTypes.func.isRequired,
}

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  fetchFilters: () => {
    dispatch(fetchFiltersAction())
  },
})

export default connect(null, mapDispatchToProps)(PlaylistsPage)
