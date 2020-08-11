export async function getPlaylistFilters() {
  const filters = await fetchFilters()
  return transformFilters(filters)
}

async function fetchFilters(): Promise<Filter> {
  const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
  const response = await fetch(url)
  const json = await response.json()
  return json.filters
}

function transformFilters(filters: Filter): FilterTransformed {
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
  const mappedValues = country.values.map(v => ({ label: v.name, value: v.value }))
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

type Filter = [Locale, Country, Timestamp, Limit, Offset]

type FilterTransformed = {
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
