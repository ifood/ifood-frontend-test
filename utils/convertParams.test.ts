import { convertObjectParamsToString } from './convertParams'

test('Add locale param', () => {
  const filter = {
    locale: 'pt_BR',
  }
  const result = convertObjectParamsToString(filter)
  expect(result).toBe('locale=pt_BR')
})

test('Add all queries params', () => {
  const filter = {
    locale: 'pt_BR',
    country: 'pt_BR',
    timestamp: '2014-10-23T09:00:00',
    limit: 10,
    offset: 1
  }
  const result = convertObjectParamsToString(filter)
  expect(result).toBe('locale=pt_BR&country=pt_BR&timestamp=2014-10-23T09%3A00%3A00&limit=10&offset=1')
})

test('No query params', () => {
  const result = convertObjectParamsToString({})
  expect(result).toBe('')
})