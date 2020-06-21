import React from 'react'
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup, waitForElementToBeRemoved, waitFor } from "@testing-library/react"
import { Playlists } from '../../src/Playlists'
import { TestProviders } from '../utils'
import { querySearchedPlaylists, queryWithError } from '../mocks';

describe('when fetching playlists', () => {

  afterEach(cleanup) 

  it('should render a playlist and its songs from search', () => {
    const { findByText } = render(
      <TestProviders>
        <MockedProvider mocks={[querySearchedPlaylists]}>
          <Playlists search="HardRock" />
        </MockedProvider>
      </TestProviders>
    )

    expect(findByText('HardRock')).toBeDefined();
    expect(findByText("We're Not Gonna Take It")).toBeDefined();
    expect(findByText("Thunderstruck")).toBeDefined();
    expect(findByText("Rock And Roll All Nite")).toBeDefined();
    expect(findByText("You Shook Me All Night Long")).toBeDefined();
  })

  it('should perform loading state before rendering', async () => {
    const { findByText, getByTestId } = render(
      <TestProviders>
        <MockedProvider mocks={[querySearchedPlaylists]}>
          <Playlists search="HardRock" />
        </MockedProvider>
      </TestProviders>
    )
    
    expect(getByTestId('PlaylistsLoader')).toBeDefined()
    await waitForElementToBeRemoved(() => getByTestId('PlaylistsLoader'))
    expect(findByText('HardRock')).toBeDefined()
  })

  it('should render an error boundary and log error on failing', async () => {
    const logErrorMock = jest.fn()
    const { findByText } = render(
      <TestProviders>
        <MockedProvider mocks={[queryWithError]}>
          <Playlists limit={60} logError={logErrorMock} />
        </MockedProvider>
      </TestProviders>
    )
    expect(findByText('errorboudaryfetch')).toBeDefined();
    await waitFor(() => expect(logErrorMock).toHaveBeenCalledTimes(1))
  })
})
