import { addQueryParamsToURL } from './playlists'

test('Add locale param', () => {
  const filter = {
    locale: 'pt_BR',
  }
  const result = addQueryParamsToURL(filter)
  expect(result).toBe('https://example.com/?locale=pt_BR')
})

test('Add all queries params', () => {
  const filter = {
    locale: 'pt_BR',
    country: 'pt_BR',
    timestamp: '2014-10-23T09:00:00',
    limit: 10,
    offset: 1
  }
  const result = addQueryParamsToURL(filter)
  expect(result).toBe('https://example.com/?locale=pt_BR&country=pt_BR&timestamp=2014-10-23T09%3A00%3A00&limit=10&offset=1')
})

test('No query params', () => {
  const result = addQueryParamsToURL({})
  expect(result).toBe('https://example.com/?')
})