import mockAxios from 'axios'

import { getFormFilters } from '.'

import filtersMock from '../../__mocks__/filters.json'

describe('Form Filters service', () => {
  it('should return form fields payload', async () => {
    const data = { data: filtersMock }

    mockAxios.get.mockResolvedValue(data)

    const response = await getFormFilters()

    expect(response.data).toEqual(filtersMock)
  })
})
