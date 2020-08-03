import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

import { Header, CardFeatured, Filters, Loading, Premium } from '../../components'

import * as SpotifyService from '../../services/spotify'
import * as FilterService from '../../services/filters'

function FeaturedPlaylist ({ handlerLanguage }) {
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState([])
  const [playlists, setPlaylists] = useState({})
  const [totalPlaylists, setTotalPlaylists] = useState({})
  const [searchies, setSearchies] = useState({ offset: 0, limit: 5 })
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData () {
    const [filtersData, hasToken] = await Promise.all([
      loadFilters(),
      SpotifyService.accessTokenValidation()
    ])

    setFilters(filtersData)

    if (hasToken) loadFeturedPlaylist(searchies)
  }

  async function loadFilters () {
    const { filters } = await FilterService.getFilters()

    return filters
  }

  async function loadFeturedPlaylist (data) {
    setIsLoading(true)

    const newSearchies = {
      ...searchies,
      ...data
    }

    setSearchies(newSearchies)

    const resp = await SpotifyService.getFeturedPlaylist(newSearchies)

    if (resp.error) {
      if (resp.error.status === 401) {
        if (await SpotifyService.accessTokenValidation()) await loadFeturedPlaylist({ offset: 0, limit: 5 })
      }
    } else {
      setPlaylists(resp.playlists)
      setTotalPlaylists(resp.playlists)
      setMessage(resp.message)
    }

    setIsLoading(false)
  }

  function filterPLaylists (search) {
    let items = totalPlaylists.items

    if (search) {
      items = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    setPlaylists({
      ...playlists,
      items
    })
  }

  return (
    <S.Main>
      <Loading isLoading={isLoading}/>
      <S.Section>
        <Header>
          <Filters
            filters={filters}
            filterPLaylists={filterPLaylists}
            handlerLanguage={handlerLanguage}
            handlerSubmitFilters={loadFeturedPlaylist} />
        </Header>
        <CardFeatured
          title={message}
          playlists={playlists}
          searchies={searchies}
          onSubmit={loadFeturedPlaylist} />
        <Premium />
      </S.Section>
    </S.Main>
  )
}

FeaturedPlaylist.propTypes = {
  handlerLanguage: PropTypes.func.isRequired
}

export default FeaturedPlaylist
