import React, { createContext, useContext, useState } from 'react'

import { apiAuth, api, apiMocky } from '~/services/api'
import { getSetAccess } from '~/services/auth'
import { FEATUREDPLAYLISTSERVER } from '~/config'
import { dateFormattedPattern } from '~/utils'

import moment from 'moment'

const queryString = require('query-string')

const PlaylistContext = createContext()

const PlaylistProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)
  const [filtersList, setFiltersList] = useState([])
  const [featuredList, setFeaturedList] = useState()
  const [playlistSearchName, setPlaylistSearchName] = useState('')

  const [locale, setLocale] = useState('pt_BR')
  const [country, setCountry] = useState('BR')
  const [timestamp, setTimestamp] = useState(
    moment().format(dateFormattedPattern)
  )
  const [limit, setLimit] = useState(30)
  const [offset, setOffset] = useState(1)

  const modal = (type) => {
    setShowFilters(type)
  }

  const auth = async () => {
    const response = await apiAuth.post(
      '',

      queryString.stringify({
        response_type: 'token',
        grant_type: 'client_credentials',
      })
    )

    getSetAccess(response.data)
  }

  const getQueryFilter = (filters) => {
    const encodeURI = encodeURIComponent

    let queryFilter = []

    for (let filter in filters) {
      if (filters[filter] !== '') {
        queryFilter.push(encodeURI(filter) + '=' + encodeURI(filters[filter]))
      }
    }

    return queryFilter.length ? `?${queryFilter.join('&')}` : ''
  }

  const filterPlaylistName = (name) => {
    return (
      filtersList &&
      featuredList &&
      featuredList.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase())
      )
    )
  }

  const getFeaturedList = async (filters) => {
    const queryFilter = getQueryFilter(filters)

    const response = await api.get(`${FEATUREDPLAYLISTSERVER}${queryFilter}`)

    setLoading(false)
    setFeaturedList(response.data.playlists.items)
  }

  const filtersUpdate = async (updatedFilter) => {
    setLocale(updatedFilter.locale)
    setCountry(updatedFilter.country)
    setTimestamp(updatedFilter.timestamp)
    setLimit(updatedFilter.limit)
    setOffset(updatedFilter.offset)

    getFeaturedList(updatedFilter)
  }

  const getFiltersList = async () => {
    const response = await apiMocky.get()

    setFiltersList(response.data.filters)
  }

  return (
    <PlaylistContext.Provider
      value={{
        auth,
        loading,
        showFilters,
        modal,
        getFiltersList,
        filtersList,
        filtersUpdate,
        filterPlaylistName,
        playlistSearchName,
        setPlaylistSearchName,
        getFeaturedList,
        featuredList,
        setFeaturedList,
        locale,
        country,
        timestamp,
        limit,
        offset,
        setLocale,
        setCountry,
        setTimestamp,
        setLimit,
        setOffset,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  )
}

function useFeaturedMusic() {
  const context = useContext(PlaylistContext)

  if (!context) {
    throw new Error('Houve um erro, você precisa usar o PlaylistProvider')
  }

  return context
}

export { PlaylistProvider, useFeaturedMusic }
