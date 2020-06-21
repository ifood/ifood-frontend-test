import React from 'react'
import PubSub from 'pubsub-js'
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react"
import { SearchBox } from '../../src/components/SearchBox'
import { FilterEvents } from '../../src/events'
import { TestProviders } from '../utils'

describe('when visiting search box', () => {

  afterEach(cleanup)

  it('should render properly', () => {
    const { getByText, getByPlaceholderText } = render(
      <TestProviders>
        <SearchBox />
      </TestProviders>
    )

    expect(getByText('Pesquisar')).toBeDefined()
    expect(getByPlaceholderText('Busque por playlists pelo título')).toBeDefined()
  })

  it('should trigger search event', async () => {
    const handleSearchMock = jest.fn()
    const { getByText, getByPlaceholderText } = render(
      <TestProviders>
        <SearchBox />
      </TestProviders>
    )

    PubSub.subscribe(FilterEvents.Search, handleSearchMock)

    fireEvent.change(
      getByPlaceholderText('Busque por playlists pelo título'),
      { target: { value: 'HardRock' } }
    )
    fireEvent.click(getByText('Pesquisar'))

    await waitFor(() => expect(handleSearchMock).toHaveBeenCalledTimes(1))

    PubSub.unsubscribe(FilterEvents.Search)
  })
})
