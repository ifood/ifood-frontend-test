/**
 *
 * PlaylistsPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchFiltersAction } from './actions'

export function PlaylistsPage(props) {
  const { fetchFilters, history } = props

  useEffect(() => {
    const hashes = getHashesObject()

    if (hashes.access_token) {
      fetchFilters()
    } else {
      history.replace('/')
    }
  }, [fetchFilters, history])

  const getHashesObject = () => window.location.hash
    .substring(1)
    .split('&')
    .reduce((acc, hashString) => {
      if (hashString) {
        const keyValue = hashString.split('=')
        acc[keyValue[0]] = decodeURIComponent(keyValue[1])
      }

      return acc
    }, {})

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
