export function buildParams({country, locale, timestamp, limit, offset}) {
  const nation = country ? `&country=${country}` : ''
  const lang = locale ? `&locale=${locale}` : ''
  const time = timestamp ? `&timestamp=${timestamp}` : 'timestamp=2020-09-12T08:09:00'
  const max = limit ? `&limit=${limit}` : ''
  const set = offset ? `&offset${offset}` : ''

  return `?${time}${nation}${lang}${max}${set}`
}
