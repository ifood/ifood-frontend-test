import { convertDateTimeToTimestamp, createPlaylistFilter } from './timestamp'

const isoDateTimeRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/

test('Correctly convert datetime to timestamp with provided datetime', () => {
  const stateDate = '2020-01-01'
  const stateTime = '12:00:00'
  const result = convertDateTimeToTimestamp(stateDate, stateTime)
  expect(isoDateTimeRegex.test(result)).toBe(true)
})

test('Correctly convert datetime to timestamp without datetime', () => {
  const result = convertDateTimeToTimestamp('', '')
  expect(isoDateTimeRegex.test(result)).toBe(true)
})

test('Create playlist filter without filters', () => {
  const state = {}
  const result = createPlaylistFilter(state)
  expect(result.locale).toBe(undefined)
  expect(result.country).toBe(undefined)
  expect(result.limit).toBe(undefined)
  expect(result.offset).toBe(undefined)
  expect(result.timestamp).toBeTruthy()
})

test('Create playlist filter with only provided filters', () => {
  const state = {
    locale: 'pt_BR',
    country: 'BR',
    limit: 10,
    offset: 1,
  }
  const result = createPlaylistFilter(state)
  expect(result.locale).toBe('pt_BR')
  expect(result.country).toBe('BR')
  expect(result.limit).toBe(10)
  expect(result.offset).toBe(1)
  expect(result.timestamp).toBeTruthy()
})