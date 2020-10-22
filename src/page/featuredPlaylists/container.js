import React, { useEffect } from 'react'
import { func, array, string, bool, object } from 'prop-types'
import { connect } from 'react-redux'
import FeaturedPlaylist from './featuredPlaylists'
import { getFilter, getPlaylist } from '../../redux/actions'
import { fetchTokenToLocalStorage } from '../../api/spotify'

const propTypes = {
  getFilter: func.isRequired,
  filters: array,
  playlists: object,
  getPlaylist: func,
  message: string,
  loadingFilter: bool,
  loadingPlaylist: bool,
}

const mapDispatchToProps = dispatch => ({
  getFilter: () => dispatch(getFilter()),
  getPlaylist: (params) => dispatch(getPlaylist(params))
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

const mapStateToProps = (state) => {
  return {
    filters: state.filterReducer.filters,
    playlists: state.playlistReducer.playlists,
    message: state.playlistReducer.message,
    loadingFilter: state.filterReducer.loading,
    loadingPlaylist: state.playlistReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  FeaturedPlaylistsContainer
)
