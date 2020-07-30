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
  filterChoices: {
    locale: 'pt-BR'
  },
  playlists: []
}

export const PlaylistProvider = (contextProps) => {
  const [state, setState] = useState(INITIAL_STATE)

  const value = useMemo(() => {
    return {
      setState,
      state
    }
  }, [state])

  const setFilterChoices = useCallback(
    (filter) => {
      setState((prevState) => ({
        ...prevState,
        filterChoices: { ...prevState.filterChoices, ...filter }
      }))
    },
    [setState]
  )

  const changeState = (changedValue, keyValue) => {
    setState((prevState) => ({
      ...prevState,
      [keyValue]: changedValue
    }))
  }

  const fetchFeaturedPlaylists = useCallback(async (params) => {
    try {
      const { data } = await getFeaturedPlaylists(params)
      if (data && Object.keys(data)) {
        changeState(data, 'featuredPlaylists')
        if ( data.playlists && data.playlists.items && data.playlists.items.length ) {
          console.log(data.playlists.items)
          changeState(data.playlists.items, 'playlists')
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      changeState(false, 'loadingPlaylists')
    }
  }, [])

  const choicesForFilter = useCallback(async () => {
    try {
      const { data } = await getChoicesForFilter()
      if (data && Object.keys(data) && data.filters.length) {
        changeState(data.filters, 'filterFields')
      }
    } catch (error) {
      console.log(error)
    } finally {
      changeState(false, 'loadingFilterFields')
    }
  }, [])

  const filterByText = useCallback(text => {
    const { featuredPlaylists } = state
    const hasPlaylists = Object.keys(featuredPlaylists) &&
      featuredPlaylists.playlists &&
      featuredPlaylists.playlists.items &&
      featuredPlaylists.playlists.items.length

    if (hasPlaylists) {
      const filteredByNames = featuredPlaylists.playlists.items.filter(playlist => {
        const replace = new RegExp(text.toLowerCase(),"g")
        const hasMatch = replace.test(playlist.name.toLowerCase())
        return hasMatch
      })

      changeState(filteredByNames, 'playlists')
    }
  }, [state])

  useEffect(() => {
    if ( Object.keys(state.filterChoices).length ) {
      const fetchWithParams = async() => {
        await fetchFeaturedPlaylists(state.filterChoices)
      }

      fetchWithParams()
    }
  }, [fetchFeaturedPlaylists, state.filterChoices])

  useEffect(() => {
    const fetch = async () => {
      await fetchFeaturedPlaylists(INITIAL_STATE.filterChoices)
      await choicesForFilter()
    }

    fetch()
  }, [choicesForFilter, fetchFeaturedPlaylists])

  useEffect(() => {
    const fetch = async () => {
      await fetchFeaturedPlaylists(INITIAL_STATE.filterChoices)
    }

    const timer = setTimeout(fetch, 30000)

    return () => clearTimeout(timer)
  }, [fetchFeaturedPlaylists])

  return <PlaylistContext.Provider value={{...value, filterByText, setFilterChoices }} {...contextProps} />
}

export default function usePlaylist() {
  const context = useContext(PlaylistContext)

  if (!context) {
    throw new Error('usePlaylist must go inside PlaylistProvider')
  }

  return {
    ...context.state,
    ...context
  }
}

PlaylistProvider.propTypes = {
  children: element.isRequired
}
