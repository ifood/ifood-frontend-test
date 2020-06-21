import React from 'react'
import { MockedProvider as GraphqlMockedProvider } from '@apollo/client/testing'
import { render, cleanup, waitForElementToBeRemoved, waitFor, fireEvent } from "@testing-library/react"
import { Filters } from '../../src/Filters'
import { TestProviders } from '../utils'
import { FilterEvents, LocalEvents } from '../../src/events'
import { queryFilters, queryWithError, queryTotal } from '../mocks'

describe('Filter', () => {
  describe('when fetching filters', () => {
  
    afterEach(cleanup)
  
    it('should render playlist filters', async () => {
      const { findByText } = render(
        <TestProviders>
          <GraphqlMockedProvider mocks={[queryFilters, queryTotal]}>
            <Filters />
          </GraphqlMockedProvider>
        </TestProviders>
      )
  
      expect(await findByText('Locale')).toBeDefined()
      expect(await findByText("Quantidade")).toBeDefined()
      expect(await findByText("Página")).toBeDefined()
    })
  
    it('should perform loading state before rendering', async () => {
      const { findByText, getByTestId } = render(
        <TestProviders>
          <GraphqlMockedProvider mocks={[queryFilters, queryTotal]}>
            <Filters />
          </GraphqlMockedProvider>
        </TestProviders>
      )
      
      expect(getByTestId('FiltersLoader')).toBeDefined()
      await waitForElementToBeRemoved(() => getByTestId('FiltersLoader'))
      expect(await findByText('Locale')).toBeDefined()
    })
  
    it('should render an error boundary and log error on failing', async () => {
      const logErrorMock = jest.fn()
      const { findByText } = render(
        <TestProviders>
          <GraphqlMockedProvider mocks={[queryWithError]}>
            <Filters logError={logErrorMock} />
          </GraphqlMockedProvider>
        </TestProviders>
      )
      expect(await findByText(
        'Não encontramos nenhum filtro. Por favor, tente novamente ou volte mais tarde.'
      )).toBeDefined()
      await waitFor(() => expect(logErrorMock).toHaveBeenCalledTimes(1))
    })
  })

  describe('when selecting a filter', () => {

    afterEach(cleanup)

    it('should open a limit overlay and filter by it', async () => {
      const handleShowLimitMock = jest.fn()
      const handleFilterMock = jest.fn()
      const { findByTitle, findByText, findByPlaceholderText } = render(
        <TestProviders>
          <GraphqlMockedProvider mocks={[queryFilters, queryTotal]}>
            <Filters />
          </GraphqlMockedProvider>
        </TestProviders>
      )
  
      PubSub.subscribe(LocalEvents.ShowLimit, handleShowLimitMock)
      PubSub.subscribe(FilterEvents.FilterLimit, handleFilterMock)
  
      fireEvent.click(await findByText('Quantidade'))
      await waitFor(() => expect(handleShowLimitMock).toHaveBeenCalledTimes(1))
  
      fireEvent.change(
        await findByPlaceholderText('Número de playlists por página'),
        { target: { value: '8' } }
      )
      
      fireEvent.click(await findByTitle('Filtrar por limite'))
      await waitFor(() => expect(handleFilterMock).toHaveBeenCalledTimes(1))
  
      PubSub.unsubscribe(LocalEvents.ShowLimit)
      PubSub.unsubscribe(FilterEvents.FilterLimit)
    })
  })
})
