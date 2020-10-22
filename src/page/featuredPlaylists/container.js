import React, { useEffect } from 'react'
import { func, array, string, object } from 'prop-types'
import { connect } from 'react-redux'
import { FeaturedPlaylist } from './featuredPlaylists'
import { getFilters, getPlaylists } from '../../redux/actions'
import { fetchTokenToLocalStorage } from '../../api/spotify'

const propTypes = {
  getFilters: func.isRequired,
  filters: array,
  playlists: object,
  getPlaylists: func.isRequired,
  message: string,
}

const mapDispatchToProps = dispatch => ({
  getFilters: () => dispatch(getFilters()),
  getPlaylists: (params) => dispatch(getPlaylists(params))
})

const FeaturedPlaylistsContainer = (props) => {

  useEffect(() => {
    fetchTokenToLocalStorage()
  }, [])

  return (
    <FeaturedPlaylist {...props}/>
  )
}

FeaturedPlaylistsContainer.propTypes = propTypes

const mapStateToProps = (state) => ({
    filters: state.filterReducer.filters,
    playlists: state.playlistReducer.playlists,
    message: state.playlistReducer.message,
})

export default connect(mapStateToProps, mapDispatchToProps)(
  FeaturedPlaylistsContainer
)
