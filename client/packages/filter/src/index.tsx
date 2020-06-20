import React, { ReactElement } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import Bugsnag from '@bugsnag/js'
import { Filters } from './Filters'
import { FilterTheme } from './theme'

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
  return (
    <ApolloProvider client={client}>
      <Filters />
    </ApolloProvider>
  )
}

declare module 'styled-components' {
  export interface DefaultTheme {
    filter: FilterTheme;
  }
}

export { FilterEvents } from './events'
