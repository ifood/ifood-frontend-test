/**
 *
 * PlaylistsPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import hashes from '../../utils/getTokenFromHash'

import {
  selectFiltersResource,
  selectFiltersIsLoading,
} from './selectors'
import {
  fetchFiltersAction,
  fetchPlaylistsAction,
} from './actions'

export function PlaylistsPage(props) {
  const { fetchFilters, fetchPlaylists, history } = props

  useEffect(() => {
    if (hashes.access_token) {
      fetchFilters()
      fetchPlaylists()
    } else {
      history.replace('/')
    }
  }, [fetchFilters, fetchPlaylists, history])

  return (
    <div>
    </div>
  )
}

PlaylistsPage.propTypes = {
  history: PropTypes.object.isRequired,
  fetchFilters: PropTypes.func.isRequired,
  fetchPlaylists: PropTypes.func.isRequired,
}

/* istanbul ignore next */
const mapStateToProps = createStructuredSelector({
  filters: selectFiltersResource,
  filtersIsLoading: selectFiltersIsLoading,
})

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  fetchFilters: () => {
    dispatch(fetchFiltersAction())
  },
  fetchPlaylists: () => {
    dispatch(fetchPlaylistsAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsPage)
