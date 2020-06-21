import React, { ReactElement, lazy, Suspense } from 'react'
import styled from 'styled-components'
import { DefaultThemeProvider } from './theme'
import {
  Header,
  Loader
} from './components'

const I18nProvider = lazy(() => import(
  /* webpackChunkName: "internationalization" */ '@spotifood/internationalization'
))

const CommunicationProvider = lazy(() => import(
  /* webpackChunkName: "communication-sdk" */ '@spotifood/communication-sdk'
))

const Playlists = lazy(() => import(
  /* webpackChunkName: "playlists" */ '@spotifood/playlists'
))

const Filter = lazy(() => import(
  /* webpackChunkName: "filter" */ '@spotifood/filter'
))

const ShellContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MicrofrontendsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 20px;
  padding: 10px 20px;

  @media (max-width: ${({ theme }) => theme.filter.breakpoints.small}) {
    padding: 10px 5px;
  }
`

export default function Shell(): ReactElement {
  return(
    <DefaultThemeProvider>
      <ShellContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <I18nProvider>
            <CommunicationProvider>
              <MicrofrontendsContainer>
                <Suspense fallback={<Loader />}>
                  <Filter />
                </Suspense>
                <Suspense fallback={<Loader />}>
                  <Playlists/>
                </Suspense>
              </MicrofrontendsContainer>
            </CommunicationProvider>
          </I18nProvider>
        </Suspense>
      </ShellContainer>
    </DefaultThemeProvider>
  )
}
