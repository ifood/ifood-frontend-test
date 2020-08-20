/**
 *
 * PlaylistsPage
 *
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import hashes from '../../utils/getTokenFromHash'
import { StyledRouterLink } from '../../components/StyledLink'
import Filters from '../../components/Filters'
import Playlists from '../../components/Playlists'

import {
  selectFiltersResource,
  selectFiltersIsLoading,
  selectPlaylistsError,
  selectPlaylistsResource,
  selectFilterValues,
} from './selectors'
import {
  fetchFiltersAction,
  fetchPlaylistsAction,
  updateFilterValuesAction,
} from './actions'
import { ErrorWrapper } from './styles'

const INTERVAL_TIME_TO_FETCH_PLAYLISTS = 30000

export function PlaylistsPage(props) {
  const {
    fetchFilters,
    fetchPlaylists,
    history,
    playlistsError,
    filtersValue,
    playlistResponse,
  } = props
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    let interval = null

    if (hashes.access_token) {
      fetchFilters()

      interval = setInterval(() => {
        fetchPlaylists()
      }, INTERVAL_TIME_TO_FETCH_PLAYLISTS)
    } else {
      history.replace('/')
    }

    return () => {
      clearInterval(interval)
    }
  }, [fetchFilters, history, fetchPlaylists])

  useEffect(() => {
    if (hashes.access_token) {
      fetchPlaylists()
    }
  }, [filtersValue, fetchPlaylists])

  const handleFiltersChange = (filterId, value) => {
    if (filterId === 'name') {
      setNameFilter(value)
    } else {
      const normalizedValue = value === '' ? undefined : value
      props.updateFilterValues(filterId, normalizedValue)
    }
  }

  const renderErrorMessage = () => (
    <ErrorWrapper>
      <p>Um erro ocorreu, tente novamente mais tarde!</p>
      <StyledRouterLink
        id="backToHome"
        to="/"
      >
        Voltar a tela inicial
      </StyledRouterLink>
    </ErrorWrapper>
  )

  return (
    <div>
      {playlistsError ? renderErrorMessage() : (
        <div>
          <Filters
            filtersList={props.filters}
            handleFilters={handleFiltersChange}
          />
          <Playlists
            playlistResponse={playlistResponse}
            nameFilter={nameFilter}
          />
        </div>
      )}
    </div>
  )
}

PlaylistsPage.propTypes = {
  history: PropTypes.object.isRequired,
  fetchFilters: PropTypes.func.isRequired,
  fetchPlaylists: PropTypes.func.isRequired,
  updateFilterValues: PropTypes.func.isRequired,
  playlistsError: PropTypes.object,
  playlistResponse: PropTypes.object.isRequired,
  filters: PropTypes.array,
  filtersValue: PropTypes.object,
}

/* istanbul ignore next */
const mapStateToProps = createStructuredSelector({
  filters: selectFiltersResource,
  filtersIsLoading: selectFiltersIsLoading,
  playlistsError: selectPlaylistsError,
  playlistResponse: selectPlaylistsResource,
  filtersValue: selectFilterValues,
})

/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  fetchFilters: () => {
    dispatch(fetchFiltersAction())
  },
  fetchPlaylists: () => {
    dispatch(fetchPlaylistsAction())
  },
  updateFilterValues: (filterId, value) => {
    dispatch(updateFilterValuesAction(filterId, value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsPage)
