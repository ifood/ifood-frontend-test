import React from 'react'
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup, waitForElementToBeRemoved, waitFor } from "@testing-library/react"
import { Filters } from '../../src/Filters'
import { TestProviders } from '../utils'
import { queryFilters, queryWithError, queryTotal } from '../mocks';

describe('when fetching filters', () => {

  afterEach(cleanup)

  it('should render playlist filters', () => {
    const { findByText } = render(
      <TestProviders>
        <MockedProvider mocks={[queryFilters]}>
          <Filters />
        </MockedProvider>
      </TestProviders>
    )

    expect(findByText('Locale')).toBeDefined();
    expect(findByText("País")).toBeDefined();
    expect(findByText("Quantidade")).toBeDefined();
    expect(findByText("Página")).toBeDefined();
  })

  it('should perform loading state before rendering', async () => {
    const { findByText, getByTestId } = render(
      <TestProviders>
        <MockedProvider mocks={[queryFilters, queryTotal]}>
          <Filters />
        </MockedProvider>
      </TestProviders>
    )
    
    expect(getByTestId('FiltersLoader')).toBeDefined()
    await waitForElementToBeRemoved(() => getByTestId('FiltersLoader'))
    expect(findByText('Locale')).toBeDefined()
  })

  it('should render an error boundary and log error on failing', async () => {
    const logErrorMock = jest.fn()
    const { findByText } = render(
      <TestProviders>
        <MockedProvider mocks={[queryWithError]}>
          <Filters logError={logErrorMock} />
        </MockedProvider>
      </TestProviders>
    )
    expect(findByText('errorboudaryfetch')).toBeDefined();
    await waitFor(() => expect(logErrorMock).toHaveBeenCalledTimes(1))
  })
})
