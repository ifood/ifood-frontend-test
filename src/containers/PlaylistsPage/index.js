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
const mapStateToProps = createStructuredSelector({
  filters: selectFiltersResource,
  filtersIsLoading: selectFiltersIsLoading,
})

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  fetchFilters: () => {
    dispatch(fetchFiltersAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsPage)
