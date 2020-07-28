import { createContext, useState, useEffect, useContext, useMemo } from 'react'
import { getFeaturedPlaylists } from '../services/playlist.service'
import { element } from 'prop-types'

const PlaylistContext = createContext({})
const INITIAL_STATE = {
  loadingPlaylists: true,
  featuredPlaylists: {}
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
      console.log('deu ruim')
    } finally {
      setState((prevState) => ({
        ...prevState,
        loadingPlaylists: false
      }))
    }
  }

  useEffect(() => {
    const fetch = async () => {
      await featuredPlaylists()
    }

    fetch()
  }, [])

  return <PlaylistContext.Provider value={value} {...contextProps} />
}

export default function usePlaylist() {
  const context = useContext(PlaylistContext)
  if (!context) {
    throw new Error('usePlaylist must go inside PlaylistProvider')
  }

  return {
    ...context.state
  }
}

PlaylistProvider.propTypes = {
  children: element.isRequired
}
