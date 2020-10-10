import React, { useState, useEffect } from 'react'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loader from '../components/Loader'
import FeaturedPlaylist from '../components/FeaturedPlaylist'
import Filters from '../components/Filters'
import Navbar from '../components/Navbar'
import { getFilters } from '../services/spotifyApi'
import useSWR from 'swr'

export const index = () => {
  const filtersValues = {}
  const [featuredPlaylists, setFeaturedPlaylists] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const { token, logout } = useAuth()

  const { data: filters } = useSWR('/v2/5a25fade2e0000213aa90776', () => getFilters())
  const { data: _featuredPlaylists, error } = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist('/v1/browse/featured-playlists', token, filtersValues),  { refreshInterval: 30000 },)


  useEffect(() => {
    setFeaturedPlaylists(_featuredPlaylists)
  }, [_featuredPlaylists])

  const handleUpdateFeaturedPlaylist = async (_filtersValues) => {
    setIsLoading(true)
    try {
      const _featuredPlaylists = await getFeaturedPlaylist('/v1/browse/featured-playlists', token, _filtersValues)
      setFeaturedPlaylists(_featuredPlaylists)
      setIsLoading(false)
    } catch (e) {
      console.log('e', e)
      setIsLoading(false)

    }

  }

  const getPlaylistFilteredByName = (playlistsByName) => {
    const newPlaylistArray = {
      ...featuredPlaylists,
      playlists: {
        ...featuredPlaylists.playlists,
        items: playlistsByName.map(playlistByName => {
          if (featuredPlaylists.playlists.items.find(featuredPlaylist => featuredPlaylist.name === playlistByName.item.name) !== 'undefined') {
            return playlistByName.item
          }
        })
      }
    }

    setFeaturedPlaylists(newPlaylistArray)
  }


  if (!_featuredPlaylists || !filters || !featuredPlaylists) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Navbar getPlaylist={getPlaylistFilteredByName} playlists={_featuredPlaylists.playlists} logout={logout} />
      <div className="justify-center m-10">
        <Filters UpdatePlaylist={handleUpdateFeaturedPlaylist} filters={filters.filters} />
        <div className="mt-6">
          <FeaturedPlaylist isLoading={isLoading}playlists={featuredPlaylists.playlists} />
        </div>
      </div>

      <div>
      </div>
    </div>
  )
}

export default index