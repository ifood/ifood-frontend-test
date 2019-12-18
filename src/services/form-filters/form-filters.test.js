import axios from 'axios'

import { getFormFilters } from '.'

import filtersMock from '../../__mocks__/filters.json'

jest.mock('axios')

describe('Form Filters service', () => {
  it('should return form fields payload', async () => {
    const data = { data: filtersMock }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    const response = await getFormFilters()

    expect(response.data).toHaveProperty('filters')
  })
})
