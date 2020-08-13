import { fetchURL } from './fetchURL'

export async function getPlaylistFilters(): Promise<Filter> {
  const filters = await fetchFilters()
  return transformFilters(filters)
}

async function fetchFilters(): Promise<FilterAPI> {
  const json = await fetchURL('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
  return json.filters
}

function transformFilters(filters: FilterAPI): Filter {
  const [locale, country, timestamp, limit, offset] = filters
  return {
    locale: transformLocale(locale),
    country: transformCountry(country),
    timestamp: transformTimestamp(timestamp),
    limit: transformLimit(limit),
    offset: transformOffset(offset),
  }
}

function transformLocale(locale: Locale) {
  const mappedValues = locale.values.map(v => ({ label: v.name, value: v.value }))
  return { name: locale.name, values: mappedValues }
}

function transformCountry(country: Country) {
  const mappedValues = country.values.map(v => {
    // Patch for this issue: https://github.com/ifood/ifood-frontend-test/issues/18
    const value = v.value === 'en_US' ? 'US' : v.value
    return { label: v.name, value }
  })
  return { name: country.name, values: mappedValues }
}

function transformTimestamp(timestamp: Timestamp) {
  return { name: timestamp.name }
}

function transformLimit(limit: Limit) {
  return { name: limit.name, min: limit.validation.min, max: limit.validation.max }
}

function transformOffset(offset: Offset) {
  return { name: offset.name }
}

type FilterAPI = [Locale, Country, Timestamp, Limit, Offset]

export type Filter = {
  locale: Locale
  country: Country
  timestamp: Timestamp
  limit: Limit
  offset: Offset
}

type Locale = {
  id?: string
  name: string
  values: Values[]
}

type Country = {
  id?: string
  name: string
  values: Values[]
}

type Timestamp = {
  id?: string
  name: string
}

type Limit = {
  id?: string
  name: string
  validation?: Validation
  min?: number
  max?: number
}

type Offset = {
  name: string
}

type Values = {
  value: string
  name?: string
  label?: string
}

type Validation = {
  min: number
  max: number
}
