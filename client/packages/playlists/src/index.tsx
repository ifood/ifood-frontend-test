import React, { useEffect, ReactElement, useState } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import Bugsnag from '@bugsnag/js'
import { useCommunication } from '@spotifood/communication-sdk'
import { FilterEvents } from '@spotifood/filter'
import { PlaylistsTheme } from './theme'
import { Playlists } from './Playlists'

/**
 * This has been called twice because each microfrontend
 * should have its own apiKey in production
*/
Bugsnag.start({
  apiKey: '68b84adb2c8fc41205fd1f92a43d4f1f'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `http://localhost:5000/graphql`,
  })
})

export default function App(): ReactElement {
  const { subscribe, unsubscribeAll } = useCommunication()
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([] as string[])
  const [limit, setLimit] = useState(8)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const searchTopic = subscribe(FilterEvents.Search, (_topic, value) => {
      setSearch(value)
    })

    const countryTopic = subscribe(FilterEvents.FilterCountry, (_topic, value) => {
      if (!value)  {
        setCountries([])
        return
      }
      setCountries(value.countries)
    })

    const limitTopic = subscribe(FilterEvents.FilterLimit, (_topic, value) => {
      if (!value)  {
        setLimit(8)
        return
      }
      setLimit(value)
    })

    const offsetTopic = subscribe(FilterEvents.FilterOffset, (_topic, value) => {
      setOffset(value)
    })

    return () => {
      unsubscribeAll([
        searchTopic,
        countryTopic,
        limitTopic,
        offsetTopic
      ])
    }
  }, [subscribe, unsubscribeAll])

  return (
    <ApolloProvider client={client}>
      <Playlists
        search={search}
        countries={countries}
        limit={limit}
        offset={offset}
      />
    </ApolloProvider>
  )
}

export * from './Playlists'

declare module 'styled-components' {
  export interface DefaultTheme {
    playlists: PlaylistsTheme;
  }
}
