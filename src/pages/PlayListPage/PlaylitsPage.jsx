import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { PlaylistsCard } from '../../components/Organism/PlaylistsCard'
import { Filter } from '../../components/Organism/Filter'
import { getFilterRequest } from '../../redux/actions/filter'
import {
  getPlaylistRequest,
  filterPlaylistAction,
} from '../../redux/actions/playlist'
import {
  selectPlaylists,
  selectApiFilter,
  selectAllPlaylists,
  selectHasErrorPlaylists,
} from '../../redux/reducer/PlaylistReducer'
import { createQueryParams } from '../../utils/urlHelper'
import { useDebounce } from '../../utils/debounce'
import { DEBOUNCE_PLAYLIST_TIME } from '../../utils/constants'
import { StyledPlaylistPage } from './styles'

const PlaylitsPage = () => {
  const dispatch = useDispatch()
  const playlistState = useSelector(selectPlaylists)
  const playlists = useSelector(selectAllPlaylists)
  const hasErrorPlaylists = useSelector(selectHasErrorPlaylists)
  const apiFilter = useSelector(selectApiFilter)

  const debouncedPlaylist = useDebounce(playlists, DEBOUNCE_PLAYLIST_TIME)

  const updatePlaylist = useCallback(() => {
    !hasErrorPlaylists &&
      dispatch(
        getPlaylistRequest({ filter: apiFilter, updateIsFetching: false })
      )
  }, [dispatch, hasErrorPlaylists, apiFilter])

  useEffect(() => {
    updatePlaylist()
  }, [debouncedPlaylist])

  const getFilter = useCallback(() => dispatch(getFilterRequest()), [dispatch])

  useEffect(() => {
    getFilter()
  }, [getFilter])

  const getPlaylist = useCallback(
    () => dispatch(getPlaylistRequest({ filter: '' })),
    [dispatch]
  )

  useEffect(() => {
    getPlaylist()
  }, [getPlaylist])

  const onSearchBarChange = useCallback(
    (filter) => dispatch(filterPlaylistAction({ filter })),
    [dispatch]
  )

  const onFiltersChange = useCallback(
    ({ values, hasErrors }) => {
      if (!hasErrors) {
        const filter = createQueryParams(values)
        filter !== apiFilter && dispatch(getPlaylistRequest({ filter }))
      }
    },
    [dispatch, apiFilter]
  )

  const onPageError = useMemo(() => hasErrorPlaylists, [hasErrorPlaylists])

  return (
    <>
      <Filter
        onSearchBarChange={onSearchBarChange}
        onFiltersChange={onFiltersChange}
        onPageError={onPageError}
      />
      <StyledPlaylistPage component="main">
        <Container className="page__container" maxWidth="lg">
          <Box component="section">
            <Typography
              component="h1"
              color="textPrimary"
              className="page__title"
            >
              Playlists
            </Typography>
            <PlaylistsCard className="page__card-list" {...playlistState} />
          </Box>
        </Container>
      </StyledPlaylistPage>
    </>
  )
}

export default PlaylitsPage
