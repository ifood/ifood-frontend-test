import {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback
} from 'react'
import {
  getFeaturedPlaylists,
  getChoicesForFilter
} from '../services/playlist.service'
import { element } from 'prop-types'

const PlaylistContext = createContext({})
const INITIAL_STATE = {
  loadingPlaylists: true,
  loadingFilterFields: true,
  featuredPlaylists: {},
  filterFields: [],
  filterChoices: {}
}

export const PlaylistProvider = (contextProps) => {
  const [state, setState] = useState(INITIAL_STATE)

  const value = useMemo(() => {
    return {
      setState,
      state
    }
  }, [state])

  const featuredPlaylists = async () => {
    try {
      const { data } = await getFeaturedPlaylists()
      if (data && Object.keys(data)) {
        setState((prevState) => ({
          ...prevState,
          featuredPlaylists: data
        }))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setState((prevState) => ({
        ...prevState,
        loadingPlaylists: false
      }))
    }
  }

  const choicesForFilter = async () => {
    try {
      const { data } = await getChoicesForFilter()
      if (data && Object.keys(data) && data.filters.length) {
        setState((prevState) => ({
          ...prevState,
          filterFields: data.filters
        }))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setState((prevState) => ({
        ...prevState,
        loadingFilterFields: false
      }))
    }
  }

  useEffect(() => {
    const fetch = async () => {
      await featuredPlaylists()
      await choicesForFilter()
    }

    fetch()
  }, [])

  return <PlaylistContext.Provider value={value} {...contextProps} />
}

export default function usePlaylist() {
  const context = useContext(PlaylistContext)
  const { state, setState } = context
  if (!context) {
    throw new Error('usePlaylist must go inside PlaylistProvider')
  }

  const setFilterChoices = useCallback(
    (filter) => {
      setState((prevState) => ({
        ...prevState,
        filterChoices: { ...prevState.filterChoices, ...filter }
      }))
    },
    [setState]
  )

  return {
    ...state,
    setFilterChoices
  }
}

PlaylistProvider.propTypes = {
  children: element.isRequired
}
