const url = 'http://www.mocky.io/v2/5a25fade2e0000213aa90776'

type Filter = {
  id: string
  name: string
  values?: unknown[]
  validation?: object
}

export async function fetchFilters(): Promise<Filter[]> {
  const response = await fetch(url)
  const json = await response.json()
  return json.filters
}